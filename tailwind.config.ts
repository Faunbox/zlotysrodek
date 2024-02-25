import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      abhaya: "Abhaya Libre",
      montserrat: [`var(--montserrat)`],
      poppins: "Poppins",
    },
    colors: {
      green: "#4D7A4B",
      darkGreen: "#0F4E0B",
      lightGreen: "#93BB90",
      offertGreen: "#2D632A",
      gold: "#F8CB2A",
      white: "#FFF",
      ligtherGreen: "#C6D4C2",
    },
    container: {
      center: true,
    },
    extend: {
      listStyleImage: {
        avocado: 'url("/images/avocado-jasne.svg")',
      },
      backgroundImage: {
        login: "url('/images/log.jpg')",
      },
    },
  },
  plugins: [nextui()],
};
export default config;
