import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
export default <Partial<Config>>{
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: (defaultTheme as any).colors.green,
        entitle: '#b29a70',
        cntitle: '#333',
        text: '#646464',
      },
      height: {
        15: '3.8rem',
      },
      width: {
        con: '80%',
        logo: '31.5%',
      },
      maxWidth: {
        con: '1150px',
      },
      boxShadow: {
        ts: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
      },
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        logo: '5.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
      fontFamily: {
        syl: ['Noto Sans SC'],
        sym: ['Noto Sans SC'],
        sy: ['Noto Sans SC'],
        pr: ['prompt-regular'],
        prl: ['prompt-light'],
        prm: ['prompt-bold'],
      },
      screens: {
        sm: '500px',
        md: '720px',
        // => @media (min-width: 640px) { ... }
        lg: '800px',
        laptop: '1150px',
        // => @media (min-width: 1024px) { ... }

        desktop: '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  content: [
    './pages/**/*.{js,ts,vue,html}',
    './app.{js,ts,vue,html}',
    './components/**/*.{js,ts,vue,html}',
    './layouts/**/*.{js,ts,vue,html}',
  ],
};
