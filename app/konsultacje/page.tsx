'use client'
import { useSession } from "next-auth/react";

const Consultation = () => {

  const { data: session } = useSession();
  const email: string = session?.user?.email!

  return (
    <main>
      <h1>Konsultacje</h1>
      <div className="">
        <div className="my-4">
          <h2>Konsultacja 1</h2>
          <a
            href={`https://buy.stripe.com/test_dR62b43vtc2i7yo6op?prefilled_email=${encodeURIComponent(email)}`}
            target="_blank"
          >
            <button>Kup</button>
          </a>
        </div>
        <div className="my-4">
          <h2>Konsultacja 3</h2>
          <a
            href="https://buy.stripe.com/test_dR62b43vtc2i7yo6op"
            target="_blank"
          >
            <button>Kup</button>
          </a>
        </div>
        <div className="my-4">
          <h2>Konsultacja 10</h2>
          <a
            href="https://buy.stripe.com/test_dR62b43vtc2i7yo6op"
            target="_blank"
          >
            <button>Kup</button>
          </a>
        </div>
      </div>
    </main>
  );
};

export default Consultation;
