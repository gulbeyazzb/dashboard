/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F7FAFC",
        statusText: "#1C1C1C",
        status_bg_blue: "#E3F5FF",
        status_bg_gray: "#E5ECF6",
        transaction_text: "#404040",
        actions_blue: "#4359CA",
      },
    },
  },
  plugins: [],
};
