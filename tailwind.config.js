module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: '540px',
        md: '768px',
        lg: '960px',
        xl: '1140px',
        '2xl': '1320px',
      },
    },
    extend: {},
    colors: {
      'blue': "#1E50FF",
      'dark': "#0F0B33",
      'white': "#FFFFFF",
      'gray': "#ADB9C7",
      'black' : "#272D37"
    },
  },
  plugins: [],
  important: true,
}