import { sendResetPasswordToken } from "@/actions/authActions";
import { useState } from "react";
import { ResponseData } from "../contact/FormComponent";
import FilledButton from "../typography/filledButton";

const ResetPasswordForm = () => {
  const [response, setResponse] = useState<ResponseData>({
    status: "",
    message: "",
  });

  async function onSend(formData: FormData) {
    try {
      const res = await sendResetPasswordToken(formData);
      setResponse(res.response);
      console.log(res.response);
    } catch {
      alert("Błąd podczas tworzenia konta");
    }
  }

  return (
    <div className="mt-4">
      <h4 className="text-large font-semibold mb-2">Wyślij nowy token</h4>
      <form action={onSend} className="flex flex-col gap-4">
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Twoj adres email"
          className="border-black  border-1 "
        />
        <FilledButton color="bg-darkGreen" text="white" type="submit">
          Wyślij
        </FilledButton>
        <p>{response.message}</p>
      </form>
    </div>
  );
};

export default ResetPasswordForm;
