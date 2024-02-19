<template>
  <main class="app-layout-home relative w-full mx-auto" id="j-layoutHome">
    <div v-if="loading" class="loading">
      <div class="loader"></div>
      <p>loading...</p>
    </div>
    <AppHeader class="z-[2] relative" />
    <slot></slot>
    <AppFooter class="z-[3] relative" />
  </main>
</template>
<script lang="ts" setup>
const appConf = useAppConfig();
const loading = ref(true);
useHead({
  title: appConf.title,
});
onMounted(() => {
  nextTick(() => {
    loading.value = false;
  });
});
</script>
<style lang="scss" scoped>
.app-layout-home {
  height: 100vh;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  position: relative;
  .loading {
    backdrop-filter: blur(10px);
    user-select: none;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    font-size: 30px;
    color: #333;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba($color: #fff, $alpha: 0.5);
    z-index: 99999;
  }
  .loader {
    width: 45px;
    aspect-ratio: 0.75;
    --c: no-repeat linear-gradient(#333 0 0);
    background: var(--c) 0% 50%, var(--c) 50% 50%, var(--c) 100% 50%;
    animation: l7 1s infinite linear alternate;
  }
  @keyframes l7 {
    0% {
      background-size: 20% 50%, 20% 50%, 20% 50%;
    }
    20% {
      background-size: 20% 20%, 20% 50%, 20% 50%;
    }
    40% {
      background-size: 20% 100%, 20% 20%, 20% 50%;
    }
    60% {
      background-size: 20% 50%, 20% 100%, 20% 20%;
    }
    80% {
      background-size: 20% 50%, 20% 50%, 20% 100%;
    }
    100% {
      background-size: 20% 50%, 20% 50%, 20% 50%;
    }
  }
}
</style>
