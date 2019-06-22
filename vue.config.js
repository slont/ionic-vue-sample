module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/scss/common.scss";`
      }
    }
  },
  devServer: {
    port: 18080
  }
}
