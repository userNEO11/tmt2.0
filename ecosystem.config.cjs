module.exports = {
  apps: [
    {
      name: 'balwant-super-tmt',
      script: './server.js',
      instances: 'max',
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
