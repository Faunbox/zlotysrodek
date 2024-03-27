import Stripe from "stripe";
import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { findUserByEmail, updateUserByEmail } from "@/lib/mongoose";
import { sendEmail, sendEmailWithTemplateId } from "@/lib/sendgrid";

const stripe = new Stripe(process.env.STRIPE_TEST_API_KEY!, {
  apiVersion: "2023-10-16",
});
const secret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(req: Request) {
  const signature = headers().get("stripe-signature");
  const body = await req.text();

  const event = stripe.webhooks.constructEvent(body, signature!, secret!);
  let response;
  let consultations = 0;
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

        console.log("Jestem w środku webhooka");
        

        lineItems.data.map(async (consultation) => {
          const pucharsedQuantity = consultation?.quantity;
          const pucharsedProduct = consultation.price?.product;

          const product = await stripe.products.retrieve(
            pucharsedProduct! as string
          );
          const productMetadataQuantity = product.metadata.quantity;

          const fullQuantity =
            Number(productMetadataQuantity) * Number(pucharsedQuantity);

          consultations = consultations + fullQuantity;
        });

        const customerEmail = paymentIntentSucceeded.customer_details
          ?.email as string;

        const getUserInfo = await findUserByEmail(customerEmail);
        console.log(getUserInfo.consultations);
        console.log(consultations);
        
        
        

        if (getUserInfo !== undefined) {
          const res = await updateUserByEmail(customerEmail, {
            consultations:
              (getUserInfo?.consultations! as number) + consultations!,
          });
          console.log({ res });

          const emailToCustomer = {
            personalizations: [
              {
                to: "faunbox2@gmail.com",
                dynamic_template_data: {
                  email: customerEmail,
                },
              },
            ],
            from: {
              email: process.env.SENDGRID_EMAIL!,
              name: "Dorota Sojecka",
            },
            reply_to: {
              email: process.env.SENDGRID_EMAIL!,
              name: "Dorota Sojecka",
            },
            template_id: "d-11afb444204d433e96fe7fe8865fb5c3",
          };
          const emailToDorotka = {
            to: "faunbox2@gmail.com",
            from: process.env.SENDGRID_EMAIL!,
            subject: "Wpłynęła nowa płatność",
            text: "Wpłynęła nowa płatność",
            html: `<div><p>Na adres email: ${customerEmail} dodano konsultację. Sprawdz Stripe.</p></div>`,
          };
          //@ts-ignore
          await sendEmailWithTemplateId(emailToCustomer);
          await sendEmail(emailToDorotka);
          console.log("email wysłany");

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
