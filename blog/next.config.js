// Next.js的总配置文件 
const withCss = require('@zeit/next-css')

if(typeof require !== 'undefined'){
    require.extensions['.css']=file=>{}
}

module.exports = {
  ...withCss({}),
  babel: {
    presets: ['next/babel'],
    plugins: []
  }
}