import { colors } from './themes'

/**@type {import('tailwindcss').Config} */
const tailwindConfigBase = {
  theme: {
    colors,
  },
}

export default function tailwindKIT() {
  console.log(tailwindConfigBase)
}
