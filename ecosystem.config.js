module.exports = {
  apps: [
    {
      name: 's-webnew',
      exec_mode: 'cluster',
      instances: '2',
      port: 4000,
      script: './.output/server/index.mjs',
    },
  ],
};
