module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  //加入以下設定,轉譯時會使用@babel/plugin-transform-runtime
  plugins: [
    [
      "@babel/plugin-transform-runtime"
    ]
  ]
};