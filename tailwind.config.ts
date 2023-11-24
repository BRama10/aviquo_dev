import type { Config } from 'tailwindcss'
import {nextui} from "@nextui-org/react";

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        snow: "#fff6f7",
        white: "#fff",
        darkslateblue: {
          "100": "#6c4889",
          "200": "#7c3c75",
          "300": "#311041",
          "400": "#471360",
        },

        
        midnightblue: "#471360",
        slategray: "#796682",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
      },
      borderRadius: {
        "3xs": "10px",
        xl: "20px",
      },
      gridTemplateColumns: {
        'customA' : '25% 75%',
        'customB' : '76% 24%',
        'customC' : '60% 5% 35%'
      },
      gridTemplateRows: {
        'diffRows' : '15% 85%'
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()]
}
export default config
