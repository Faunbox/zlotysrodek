import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";
import plugin from "tailwindcss/plugin";

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
      poppins: [`var(--poppins)`],
      tinos: [`var(--tinos)`],
    },
    colors: {
      green: "#4C6F4A",
      darkGreen: "#0F4E0B",
      lightGreen: "#5A805B",
      offertGreen: "#2D632A",
      gold: "#F8CB2A",
      white: "#FFF",
      ligtherGreen: "#C6D4C2",
      error: "#FA0202",
      blogPost: "#F7F6F6",
    },
    container: {
      center: true,
    },
    extend: {
      listStyleImage: {
        avocado: 'url("/images/avocado.svg")',
      },
      backgroundImage: {
        login: "url('/images/log.jpg')",
        plama: "url('/images/plama.jpg')",
        linear: 'url("/images/blog.webp")',
      },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
    },
  },
  plugins: [
    nextui(),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
export default config;
