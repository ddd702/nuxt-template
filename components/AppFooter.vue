<template>
  <footer class="app-footer text-center text-[13px] text-[#333] py-[55px] px-4">
    站点footer
    <p class="text-[#999] leading-8">Copyright © 2024</p>
  </footer>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.app-footer {
  a {
    transition: all 0.3s linear;
  }
  a:hover {
    opacity: 0.7;
  }
}
.special {
  @apply mr-[5px] laptop:mr-[16px];
}
</style>
