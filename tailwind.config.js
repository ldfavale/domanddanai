/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        aphrodite: ["aphrodite"],
        now: ["now"],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}
