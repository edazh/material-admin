const debugMode = process.env.NODE_ENV !== 'production'

module.exports = {
  publicPath: '/',
  productionSourceMap: false,
  // configureWebpack: {
  //   devtool: 'source-map',
  // },
  chainWebpack: config => {
    if (!debugMode) {
      //在非开发模式禁用preload、prefetch以节省服务器带宽
      config.plugins.delete('preload')
      config.plugins.delete('prefetch')
    }
    //路径解析别名设置
    // config.resolve.alias.set('@/*', 'src/*')
  },
}
