export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const { offset = 0, limit = 10 } = query;
  // 处理查询逻辑
  const res: any = await $fetch('https://api.qtcat.cn/ajax/acg/getlist', {
    params: {
      offset,
      limit,
    },
  });
  if (res.rcode === 200) {
    return {
      code: 200,
      msg: 'success',
      data: {
        list: res.data.list,
        total: res.data.total,
      },
    };
  }
  return {
    code: res.rcode || 500,
    msg: res.msg || 'err',
  };
});
