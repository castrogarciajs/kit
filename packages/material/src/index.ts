import merge from 'deepmerge'
import { colors } from './themes/colors'
import { boxShadow } from './themes/shadows'
import { screens } from './themes/screens'
import { fontFamily } from './themes/font-family'
import type { Config } from 'tailwindcss'

const tailwindConfigBase: Config = {
  content: [],
  theme: {
    colors,
    boxShadow,
    screens,
    fontFamily,
  },
  plugins: [],
}

export default (tailwindConfig: Config) => {
  return merge(tailwindConfigBase, { ...tailwindConfig })
}
