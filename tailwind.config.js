/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '800px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      red: colors.red,
      blue: colors.blue,
      purple: colors.purple,
      green: colors.green,
      orange: colors.orange,
    },
    extend: {
      colors: {
        primary: `#8576FF`,
        secondary: `#FCF7FF`,
        "card-border": `#F2F2F7`,
        "main": {
          light: `#fff`,
          dark: `#484554`
        },
        "main-alt": {
          light: `#ff`,
          dark: `rgb(42, 42, 52)`
        },
        text: {
          light: `#000`,
          "alt-light": `#334155`,
          dark: `#fff`,
          "dark-alt": `#fff`,
        },
        "border-primary": `#F1F5F9`,
        "grey-1": `#E2E8F0`,
        "button-outline": `#E2E8F0`,
        "table-header": `#64748B`,
        "table-header-bg": `#6A6676`,
        "green-text": `#10B981`,
        "green-bg": `#D1FAE5`,
        "red-bg": `#F43F5E`,
        "blue-bg": `#DBEAFE`,
        "blue-text": `#3B82F6`,
        success: `#10B981`,
        danger: `#F43F5E`,
        "icon-stroke-light": `#ADA9BB`,
        "text-toolbar-dark": `#CBD5E1`,
        "status-completed": `#65DDB5`,
        "status-inprogress": `#77B1FF`,
      },
    }
  },
  plugins: [require('tailwindcss-font-inter')({ // default settings
      a: -0.0223,
      b: 0.185,
      c: -0.1745,
      baseFontSize: 14,
      importFontFace: true,
    })]
}

