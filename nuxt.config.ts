// https://nuxt.com/docs/api/configuration/nuxt-config
import { loadEnv } from 'vite';
// const envData = loadEnv(envName, 'env') as unknown as VITE_ENV_CONFIG;
const envScript = (process.env as any).npm_lifecycle_script.split('--mode=');
const mode =
  envScript.length > 1 ? envScript[envScript.length - 1] : 'production'; // 通过启动命令区分环境
const envData = loadEnv(mode, process.cwd(), '');
process.env = Object.assign(process.env, envData);
console.warn('mode:', mode);
export default defineNuxtConfig({
  app: {
    rootId: 'app',
    buildAssetsDir: '/file/',
    // pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      charset: 'utf-8',
      title: '新的站点',
      // viewport: 'user-scalable=yes',
      meta: [
        {
          name: 'viewport',
          content:
            'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1, user-scalable=no',
        },
        {
          name: 'description',
          content: '网站描述',
        },
        {
          name: 'keywords',
          content: '网站关键词',
        },
      ],
    },
  },
  experimental: {
    inlineSSRStyles: false,
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@pinia/nuxt',
    'nuxt-lazy-load',
  ],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config',
    exposeConfig: false,
    exposeLevel: 2,
    injectPosition: 'first',
    viewer: true,
  },
  lazyLoad: {
    // These are the default values
    images: false,
    videos: false,
    audios: false,
    iframes: false,
    native: false,
    directiveOnly: true,

    // Default image must be in the public folder
    defaultImage: 'https://cdn.zcxnb.cn/upzone/1/20240219/narjunkoa7.png',

    // To remove class set value to false
    loadingClass: 'isLoading',
    loadedClass: 'isLoaded',
    appendClass: 'lazyLoad',

    observerConfig: {
      // See IntersectionObserver documentation
    },
  },
});
