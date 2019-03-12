const packageInfo = require('./package.json')
module.exports = {
  // webpack配置，值位对象时会合并配置，为方法时会改写配置
  configureWebpack: {},
  transpileDependencies: [], // 默认babel-loader忽略mode_modules，这里可增加例外的依赖包名
  /* publicPath: process.env.NODE_ENV === 'production' ? 'production' : '/', // 部署应用包时的基本 URL */
  outputDir: '../v5/dist',
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        Object.assign(args[0], {
          title: packageInfo.version
        })
        return args
      })
  },
  lintOnSave: process.env.NODE_ENV !== 'production', // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码。
  css: {
    loaderOptions: {
      // 给 less-loader 传递选项
      less: {
        // @/ 是 src/ 的别名
        // 所以这里假设你有 `src/variables.scss` 这个文件
        data: `@import "./src/ctmsTheme/custom.less";`
      }
    }
  },
  devServer: {
    host: '127.0.0.1',
    port: 9090, // 端口号
    hot: true, // 热更新
    https: false,
    open: true, // 当服务启动时自动打开浏览器 默认是false
    proxy: {
      '/api': {
        target: 'http://192.168.0.253:8092/',
        ws: false, // ws为true时可进行websocket通信
        changeOrigin: true
      /*  // 路径重写
       pathRewrite: {
          '^/api-v1': '/'
        } */
      }
    }
  }

}
