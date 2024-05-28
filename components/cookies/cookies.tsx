"use client";
import { useState } from "react";
//@ts-ignore
import Cookies from "js-cookie";
import { motion } from "framer-motion";
import FilledButton from "../typography/filledButton";

const CookieComponent = () => {
  const cookieInfo: boolean = Cookies.get("cookieConsent");
  const cookieValue: boolean = cookieInfo ? false : true;

  const [visible, setVisible] = useState<boolean>(cookieValue);
  console.log({ visible });

  const handleOnClick = () => {
    Cookies.set("cookieConsent", false, { expires: 90, sameSite: "Strict" });
    setVisible(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, translateX: -600 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 0.7, ease: "easeInOut", delay: 0.4 }}
      className={`fixed ${
        visible ? "flex" : "hidden"
      } flex-col gap-4 bottom-3 md:bottom-20 left-0  md:left-20 max-w-[520px] h-auto bg-neutral-600  z-50 bg-darkGreen border-1 border-white text-white p-8 font-tinos`}
    >
      <h3 className="text-xl">Liczy się dla mnie Twoja prywatność.</h3>
      <p className="font-thin">
      Używamy plików cookie, aby poprawić jakość przeglądania oraz analizować ruch na stronie. Kliknięcie przycisku „Akceptuję” oznacza zgodę na wykorzystywanie przeze mnie plików cookie.
      </p>
      <FilledButton onClick={handleOnClick}>Akceptuję</FilledButton>
    </motion.div>
  );
};

export default CookieComponent;
