import type { Config } from 'tailwindcss'
import { colors, boxShadow } from './themes'
import merge from 'deepmerge'

const tailwindConfigBase: Config = {
  content: [],
  theme: {
    colors,
    boxShadow,
  },
  plugins: [],
}

export default function withKIT(tailwindConfig: Config) {
  return merge(tailwindConfigBase, { ...tailwindConfig })
}
