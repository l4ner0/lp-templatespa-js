module.exports = {
  publicPath: process.env.VUE_APP_PATH,
  productionSourceMap: false,
  devServer: {
    proxy: {
      "/api/": {
        target: process.env.VUE_APP_URL_BASE,
        changeOrigin: true,
        pathRewrite: {
          "^/api/": "",
        },
      },
    },
  },
  transpileDependencies: ["vuetify"],
};
