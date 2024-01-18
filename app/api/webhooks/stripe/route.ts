import Stripe from "stripe";
import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { findUserByEmail, updateUserByEmail } from "@/lib/mongoose";

const stripe = new Stripe(process.env.STRIPE_TEST_API_KEY!, {
  apiVersion: "2023-10-16",
});
const secret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(req: Request) {
  try {
    const signature = headers().get("stripe-signature");
    const body = await req.text();

    const event = stripe.webhooks.constructEvent(body, signature!, secret!);
    let response;
    switch (event.type) {
      case "checkout.session.completed":
        const paymentIntentSucceeded = event.data.object;
        const checkoutId = paymentIntentSucceeded.id;
        const lineItems = await stripe.checkout.sessions.listLineItems(
          checkoutId
        );
        const consultation = lineItems.data[0];
        // const hasMore = lineItems.has_more
        const customerEmail = paymentIntentSucceeded.customer_details
          ?.email as string;

        const getUserInfo = await findUserByEmail(customerEmail);

        if (getUserInfo !== undefined) {
          const res = await updateUserByEmail(customerEmail, {
            consultations: getUserInfo.consultations + consultation.quantity,
          });

          response = res;
        } else {
          console.log("Brak usera w db");

          return { message: "Brak usera w db" };
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
