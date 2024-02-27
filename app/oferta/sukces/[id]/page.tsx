import { getCheckoutInfo } from "@/actions/stripeActions";

const Page = async ({ params }: { params: { id: string } }) => {
  const data = await getCheckoutInfo(params.id!);

  return (
    <main className="page py-20 text-large gap-4">
      <h3 className="text-xl">
        Dziękujemy za zakup{" "}
        <span className="font-semibold">{data?.user?.name as string}</span>!{" "}
      </h3>
      <p>
        Na adres email{" "}
        <span className="font-semibold">
          {data.checkout.customer_details?.email}
        </span>{" "}
        został wysłany email z potwierdzeniem transakcji.
      </p>
      <p>
        Za chwilkę zakupione konsultacje pojawią się na Twoim koncie.
      </p>
    </main>
  );
};

export default Page;
