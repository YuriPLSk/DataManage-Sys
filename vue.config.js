const path = require("path");
function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
  devServer: {
    port: 3999,
    open: true
    // proxy:{

    // }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/scss/_variable.scss";`
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set("@src", resolve("src"))
      .set("@assets", resolve("src/assets"))
      .set("@components", resolve("src/components"))
      .set("@router", resolve("src/router"))
      .set("@views", resolve("src/views"));
  },
};
