const path = require('path');
const webpack = require('webpack');
const target = 'http//localhost:1337'

const engineOutputDir = path.join(__dirname, '../back-end/api/public/engine-assets');//引擎
const mainAppOutputDir = path.join(__dirname, '../back-end/api/build-editor');
const coreEditorOutputDir = path.join(__dirname, '../front-end/src/components/core/dist');

let page;
switch(process.env.PAGE) {
    case 'ENGINE':
        page = {
            entry: 'src/engine-entry.js',
            outputDir: engineOutputDir
        }
    break
    case 'CORE_EDITOR':
        page = {
            entry: 'src/components/core/index.js',
            outputDir: coreEditorOutputDir
        }
    break
    case 'EDITOR':
    default:
        page = {
            entry: 'src/main.js',
            template: 'public/index.html',
            filename: 'index.html',
            title: 'Index Page',
            outputDir: mainAppOutputDir
        }
}

module.exports = {
    outputDir: page.outputDir,
    lintOnSave: process.env.NODE_ENV !== 'production',
    productionSourceMap: process.env.NODE_ENV !== 'production',
    pages: { index: page },
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