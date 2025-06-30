/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF4B91', // Main pink color
        secondary: '#FF8DC7', // Light pink
        accent: '#FF6BA8', // Medium pink
        dark: '#1A1A1A', // Dark text
        light: '#F8F8F8', // Light background
        gray: {
          100: '#F5F5F5',
          200: '#EEEEEE',
          300: '#E0E0E0',
          400: '#BDBDBD',
          500: '#9E9E9E',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0 4px 20px rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #FF4B91, #FF8DC7)',
      },
    },
  },
  plugins: [],
} 