import { findUserByEmail } from "@/lib/mongoose";
import Stripe from "stripe";
import { UserType } from "./authActions";

const stripe = new Stripe(process.env.STRIPE_TEST_API_KEY!, {
  apiVersion: "2023-10-16",
});

export async function getCheckoutInfo(id: string) {
  const checkout = await stripe.checkout.sessions.retrieve(id);
  const user: UserType = await findUserByEmail(checkout.customer_details?.email as string)

  return {checkout, user};
}
