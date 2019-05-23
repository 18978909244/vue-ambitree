const path = require('path');
// const LessThemePlugin = require('webpack-less-theme-plugin')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  outputDir:'ambitree',
  publicPath: './',
  chainWebpack: config => {
    config.resolve.alias
      .set('src', resolve('src'))
      .set('less', resolve('src/assets/less'))
  },
  css: {
    loaderOptions: {
      // postcss: {
      //   // options here will be passed to postcss-loader
      //   plugins: [require('postcss-px2rem')({
      //     remUnit: 75
      //   })]
      // },
      css: {
        localIdentName: '[local]_[hash:base64:8]'
      }
    }
  },
  devServer: {
    proxy: {
      '/': {
        target: 'http://soho.hzyctools.com/routine/',
        ws: false,
        changeOrigin: true
      }
    }
  }
};
