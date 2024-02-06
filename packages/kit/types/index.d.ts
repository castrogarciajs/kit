/**
 *
 * @param {import('tailwindcss').Config} tailwindConfig
 * @returns New config with Material kit for tailwindcss
 */
export default function withKIT(tailwindConfig: import('tailwindcss').Config): {
  [x: string]: any
  content: import('tailwindcss/types/config').ContentConfig
  important: Partial<import('tailwindcss/types/config').ImportantConfig>
  prefix: string
  separator: string
  safelist: import('tailwindcss/types/config').SafelistConfig[]
  blocklist: string[]
  presets: Partial<import('tailwindcss/types/config').Config>[]
  future: Partial<import('tailwindcss/types/config').FutureConfig>
  experimental: Partial<import('tailwindcss/types/config').ExperimentalConfig>
  darkMode: Partial<import('tailwindcss/types/config').DarkModeConfig>
  theme: Partial<
    import('tailwindcss/types/config').CustomThemeConfig & {
      extend: Partial<import('tailwindcss/types/config').CustomThemeConfig>
    }
  >
  corePlugins: Partial<import('tailwindcss/types/config').CorePluginsConfig>
  plugins: (
    | import('tailwindcss/types/config').PluginCreator
    | {
        handler: import('tailwindcss/types/config').PluginCreator
        config?: Partial<import('tailwindcss/types/config').Config>
      }
    | {
        (options: any): {
          handler: import('tailwindcss/types/config').PluginCreator
          config?: Partial<import('tailwindcss/types/config').Config>
        }
        __isOptionsFunction: true
      }
  )[]
}
//# sourceMappingURL=index.d.ts.map
