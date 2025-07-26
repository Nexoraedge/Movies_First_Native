/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],   // ✅ restore correct folder
  presets: [require('nativewind/preset')],
  theme: { extend: {} },
  plugins: [],
};

