import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
     colors:{
      primary: '#0F172A',
      secondary: '#64748B'
     },
     fontFamily:{
      notosans: ['Noto Sans', 'sans-serif']
     }
    },
  },
  plugins: [],
}
export default config
