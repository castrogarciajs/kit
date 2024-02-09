import type { Config } from 'tailwindcss'
import { colors } from './themes/colors'
import { boxShadow } from './themes/shadows'
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
