import Stripe from "stripe";
import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { findUserByEmail, updateUserByEmail } from "@/lib/mongoose";
import { sendEmail } from "@/lib/sendgrid";

const stripe = new Stripe(process.env.STRIPE_TEST_API_KEY!, {
  apiVersion: "2023-10-16",
});
const secret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(req: Request) {
  const signature = headers().get("stripe-signature");
  const body = await req.text();

  const event = stripe.webhooks.constructEvent(body, signature!, secret!);
  let response;
  try {
    switch (event.type) {
      case "checkout.session.completed":
        //get checkout info
        const paymentIntentSucceeded = event.data.object;
        const checkoutId = paymentIntentSucceeded.id;

        //get items from pucharse
        const lineItems = await stripe.checkout.sessions.listLineItems(
          checkoutId
        );
        const consultation = lineItems.data[0];
        const customerEmail = paymentIntentSucceeded.customer_details
          ?.email as string;

        const getUserInfo = await findUserByEmail(customerEmail);

        if (getUserInfo !== undefined) {
          const res = await updateUserByEmail(customerEmail, {
            consultations: getUserInfo?.consultations! as number + consultation?.quantity!,
          })
          
          const email = {
            to: "faunbox2@gmail.com",
            from: process.env.SENDGRID_EMAIL!,
            subject: "Płatność sfinalizowana",
            text: "Płatność sfinalizowana",
            html: "<div><p>Dodano spotaknia do Twojego konta</p></div>",
          };
          await sendEmail(email);

          response = res;
        } else {
          console.log("Brak usera w db");
        }

        break;

      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    return NextResponse.json({ result: event, ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message: "something went wrong",
        ok: false,
      },
      { status: 500 }
    );
  } 
}
