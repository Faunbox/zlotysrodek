import { getCheckoutInfo } from "@/actions/stripeActions";

const Page = async ({ params }: { params: { id: string } }) => {
  const data = await getCheckoutInfo(params.id!);

  return (
    <div>
      <p>Dziękujemy za zakup {data?.user?.name as string}! Na adres email</p>
      <p>
        {data.checkout.customer_details?.email} został wysłany email z
        potwierdzeniem!
      </p>
      <p>Aktualnie posiadasz: {data?.user?.consultations} konsultacji</p>
    </div>
  );
};

export default Page;
