import { colors } from './themes'
import merge from 'deepmerge'

/**@type {import('tailwindcss').Config} */
const tailwindConfigBase = {
  content: [],
  theme: {
    colors,
  },
  plugins: [],
}

/**
 *
 * @param {import('tailwindcss').Config} tailwindConfig
 * @returns New config with Material kit for tailwindcss
 */
export default function withKIT(tailwindConfig) {
  return merge(tailwindConfigBase, { ...tailwindConfig })
}
