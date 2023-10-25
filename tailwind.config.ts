import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#03EAEA",
        secondary: "#005FEA",
        blueMain: "#0259FF",
      },
      backgroundColor: {
        lightBLue: "#F1F7FF",
        gradient: "linear-gradient(90deg, #03EAEA 0%, #005FEA 100%)",
      },
      backgroundImage: {
        "gradient-main": "linear-gradient(90deg, #03E7EA 0%, #005FEA 100%)",
        "gradient-radial-left":
          "radial-gradient(circle at 0 100%, transparent 7px, #fff 7px)",
        "gradient-radial-right":
          "radial-gradient(circle at 100% 100%, transparent 7px, #fff 7px)",
      },
      boxShadow: {
        insetCustom: "0px 0px 10px 0px #0000001A inset",
      },
      backgroundSize: {
        half: "50% 100%",
        full: "100%",
      },
    },
  },
  plugins: [],
};
export default config;

background: "linear-gradient(118.72deg, #D5DEF0 -90.13%, #FFFFFF 59.34%, #C4EEF9 207.51%)";
