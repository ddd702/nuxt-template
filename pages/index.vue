<template>
  <div class="content">
    网站内容
    <div
      class="btn py-3 my-[10px] rounded-lg hover:opacity-[0.7] cursor-pointer px-4 bg-[#333] text-[#fff]"
      @click="search"
    >
      封装接口获取远程内容，返回情况看console控制台
      {{ loading ? 'loading' : '' }}
    </div>
  </div>
</template>
<script setup lang="ts">
import Req from '@/utils/req';
const req = new Req({ url: '/api/res' });
const loading = ref(false);
const limit = 10;
const total = ref(0);
const list = ref<any[]>([]);
const page = ref(1);
const search = async () => {
  page.value = 1;
  console.warn('开始请求');
  fetchList();
};
const fetchList = async () => {
  if (loading.value) {
    return;
  }
  loading.value = true;
  const res = await req.fetch({
    offset: (page.value - 1) * limit,
    limit,
  });
  console.warn('fetch res', res);
  loading.value = false;
  total.value = res.total;
  if (page.value > 1) {
    list.value = [...list.value, ...res.list];
  } else {
    list.value = res.list;
  }
  page.value++;
  console.warn('res', res);
};
</script>
<style lang="scss" scoped>
.btn {
  transition: opacity 0.3s linear;
}
.content {
  @apply py-[30px]  text-center mx-auto flex flex-col items-center justify-center;
  min-height: 50vh;
}
.empty {
  @apply text-[#899] text-[13px] my-[30px];
}
/* HTML: <div class="loader"></div> */
/* HTML: <div class="loader"></div> */
/* HTML: <div class="loader"></div> */
/* HTML: <div class="loader"></div> */
.loader {
  width: 30px;
  padding: 5px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #25b09b;
  --_m: conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box;
  -webkit-mask: var(--_m);
  mask: var(--_m);
  -webkit-mask-composite: source-out;
  mask-composite: subtract;
  animation: l3 1s infinite linear;
}
@keyframes l3 {
  to {
    transform: rotate(1turn);
  }
}
</style>
