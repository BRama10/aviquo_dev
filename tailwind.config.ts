import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        snow: "#fff6f7",
        white: "#fff",
        darkslateblue: {
          "100": "#86689d",
          "200": "#6c4889",
          "300": "#311041",
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
        'customB' : '76% 24%'
      },
      gridTemplateRows: {
        'diffRows' : '15% 85%'
      },
    },
  },
  plugins: [],
}
export default config
