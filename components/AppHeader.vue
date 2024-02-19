<template>
  <header :class="{ 'nav-open': openMenu }" class="app-header">
    <section class="m-auto relative justify-between lg:flex lg:items-center">
      <div class="lg:flex lg:items-center justify-end w-full">
        <ul
          class="nav lg:flex lg:ml-3.5 lg:bg-transparent text-[15px] pb-5 lg:pb-0"
        >
          <li
            v-for="nav in navs"
            :key="nav.href"
            class="nav-item font-sym text-[15px] laptop:mr-[55px] lg:mr-5 lg:py-0 py-4"
            :class="{
              active: nav.active,
              'nav-item-scroll': props.type === 'scroll',
            }"
          >
            <NuxtLink :to="nav.href" :target="nav.target">{{
              nav.title
            }}</NuxtLink>
          </li>
        </ul>
      </div>
      <div
        class="menu-toggle cursor-pointer active:opacity-50 lg:hidden"
        @click="onSwitchMenu"
      >
        <Icon name="uiw:menu" v-show="!openMenu" />
        <Icon name="uiw:close" v-show="openMenu" />
      </div>
    </section>
  </header>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
export interface Props {
  type?: string;
  color?: string;
}
const props = withDefaults(defineProps<Props>(), {
  type: 'normal',
  color: '#fff',
});
const router = useRouter();

const navsArr = [
  {
    name: 'about',
    title: '关于我们',
    href: '/about',
    target: '_self',
    active: false,
  },
  {
    name: 'news',
    title: '企业新闻',
    href: '/news',
    target: '_self',
    active: false,
  },
  {
    name: 'brand',
    title: '品牌产品',
    href: '/brand',
    target: '_self',
    active: false,
  },
  {
    name: 'contact',
    title: '联系我们',
    href: '/contact',
    target: '_self',
    active: false,
  },
];
navsArr.map((item) => {
  if (item.name === router.currentRoute.value.name) {
    item.active = true;
  }
});
const navs = ref(navsArr);
const openMenu = ref(false);
const onSwitchMenu = () => {
  openMenu.value = !openMenu.value;
  const element = document.documentElement.scrollTop
    ? document.documentElement
    : document.body;
  element.scrollTop = 0;

  // document.documentElement.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
};
onMounted(() => {
  nextTick(() => {
    window.addEventListener('resize', () => {
      openMenu.value = false;
    });
  });
});
</script>

<style lang="scss" scoped>
.scroll-nav {
  .nav-item {
    text-shadow: none;
  }
}
.nav-item {
  // @apply font-bold;
  @apply text-center py-5;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  transition: all 0.2s ease-in-out;
  // text-shadow: 0.5px 0.5px 1px rgba(0, 0, 0, 0.45);
  letter-spacing: 0.05em;
  &:hover,
  &.active {
    opacity: 0.7;
  }
  // &.active {
  //   display: none;
  // }
  &.nav-item-scroll {
    // font-size: 16px;
    @apply text-[12px];
  }
}
.menu-toggle {
  position: absolute;
  top: 20px;
  right: 20px;
  transform: translateY(-50%);
}
.app-header {
  top: 0;
  left: 0;
  width: 100%;
}
.app-logo-lg {
  // font-size: 8.75rem !important;
  @apply w-[100px] lg:w-[158px] hidden lg:block;
}
.app-logo-phone {
  display: inline-block !important;
}
.app-header {
  transition: all 0.2s linear;
  &.nav-open {
    backdrop-filter: blur(10px);
    z-index: 1111;
    @apply bg-[rgba(255,255,255,0.7)] lg:bg-transparent;
  }
  // transition: all 0.5s ease-out;
  &.nav-open .nav {
    max-height: 100vh;
    height: 100vh;
    opacity: 1;
  }
}
.nav {
  overflow-y: hidden;
  max-height: 0;
  opacity: 0;
  @media (min-width: theme('screens.lg')) {
    max-height: 100vh;
    opacity: 1;
  }
}
.pop-modal {
  height: 0;
  overflow-y: hidden;
  &.active {
    height: auto;
  }
}
</style>
<style lang="scss">
.nav-open + .home-banner {
  height: 0;
  overflow-y: hidden;
}
</style>
