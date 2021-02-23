const path = require('path');
const webpack = require('webpack');

const engineOutputDir = path.join(__dirname, '../generate-back-end/public/engine-assets');//引擎
const mainAppOutputDir = path.join(__dirname, '../back-end/api/build-editor');
const coreEditorOutputDir = path.join(__dirname, '../front-end/src/components/core/dist');

let page;
switch (process.env.PAGE) {
  case 'ENGINE':
    page = {
      entry: 'src/core/engine.js',
      outputDir: engineOutputDir
    }
    break
  case 'EDITOR':
    page = {
      entry: 'src/core/editor.js',
      outputDir: coreEditorOutputDir
    }
    break
  case 'MAIN':
  default:
    page = {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: '推广页生成',
      outputDir: mainAppOutputDir
    }
}

const configureWebpack = {
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src'),
      'core': path.join(__dirname, 'src/core')
    }
  }
}

module.exports = {
  outputDir: page.outputDir,
  lintOnSave: process.env.NODE_ENV !== 'production',
  productionSourceMap: process.env.NODE_ENV !== 'production',
  pages: {index: page},
  configureWebpack,
  pwa: {
    iconPaths: {
      favicon32: './favicon.ico',
      favicon16: './favicon.ico',
      appleTouchIcon: './favicon.ico',
      maskIcon: './favicon.ico',
      msTileImage: './favicon.ico'
    }
  }
}
