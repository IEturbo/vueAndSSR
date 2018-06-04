module.exports = (isDve) => {
  return {
    preserveWhitespace: true,
    extractCSS: !isDve,
    cssModules: {
      localIdentName: isDve ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',
      camelCase: true
    }
    // hotReload: false,根据环境变量自动生成
  }
}
