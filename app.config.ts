export default defineAppConfig({
  title: `${import.meta.env.VITE_APP_TITLE}`,
  nuxtIcon: {
    size: '24px', // default <Icon> size applied
    class: 'nuxt-icon', // default <Icon> class applied
    aliases: {
      nuxt: 'logos:nuxt-icon',
    },
  },
  theme: {
    dark: false,
    colors: {
      primary: '#ff0000',
    },
  },
});
