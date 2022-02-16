//引用path模組
const path = require('path');

// import Plugin
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    //這個webpack打包的對象，這裡面加上剛剛建立的index.js
    // by default is './src/index.js'
    entry: [
        './src/index.js',
    ],
    resolve: {
        modules: [path.join(__dirname, 'src'), 'node_modules'],
        alias: {
            react: path.join(__dirname, 'node_modules', 'react'),
        },
    },
    output: {
        //這裡是打包後的檔案名稱
        filename: 'bundle.js',
        //打包後的路徑，這裡使用path模組的resolve()取得絕對位置，也就是目前專案的根目錄
        path: path.resolve('./dist'),
    },
    //將loader的設定寫在module的rules屬性中
    module: {
        //rules的值是一個陣列可以存放多個loader物件
        rules: [
            //第一個loader編譯JSX
            { test: /.jsx|.js$/, exclude: /node_modules/, use: { loader: 'babel-loader', options: { presets: ['@babel/preset-react', '@babel/preset-env'] } } },
            //第二個loader編譯JS
            // { test: /.js$/, exclude: /node_modules/, use: { loader: 'babel-loader', options: { presets: ['@babel/preset-env'] } } },
            {
                test: /\.css$/, exclude: /node_modules/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ],
            },
        ]
    },
    //增加一個給devserver的設定
    devServer: {
        //指定開啟port為9000
        port: 9000,
        //static: "./dist",
    },
    plugins: [new HtmlWebPackPlugin({ template: './src/index.html' })],
};