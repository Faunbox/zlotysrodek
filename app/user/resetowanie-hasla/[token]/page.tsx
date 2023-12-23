'use client'
import { resetUserPassword } from "@/actions/authActions";
import { ResponseData } from "@/components/contact/FormComponent";
import { useState } from "react";

const Page = ({ params }: { params: { token: string } }) => {
  const [response, setResponse] = useState<ResponseData>({
    status: "",
    message: "",
  });

  async function onSend(formData: FormData) {
    const token = params.token;
    try {
      //get user email by given token and add it to formdata
     
      formData.append("token", token);
      console.log(formData);

      const res = await resetUserPassword(formData);
      

      setResponse(res.response);
      // console.log(res.response);
    } catch {
      alert("Błąd podczas resetowania hasła");
    }
  }

  return (
    <div className="flex flex-col">
      <form action={onSend}>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Wpisz nowe hasło"
          className="border-black border-1"
        ></input>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Powtórz hasło"
          className="border-black border-1"
        ></input>
        <button type="submit">Zresetuj hasło</button>
      </form>
      <p>{response.message}</p>
    </div>
  );
};

export default Page;
