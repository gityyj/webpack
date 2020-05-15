const path = require('path')
// 启用热更新的第二步
const webpack = require('webpack')
// 导入刚才啊安装的 html-webpack-plugin 在内存中生成 HTML 页面的插件
// 两个作用 
// 1. 自动在内存中根据指定页面生成一个内存的页面
// 2. 自动，把打包好的bundle.js 追加到页面中去
const htmlWebpackPlugin = require('html-webpack-plugin')
console.log(__dirname, '__dirname')

//   这个配置文件  是  js  文件  通过Node 中的模块操作 向外暴露了一个配置对象
module.exports = {
    entry: path.join(__dirname, './src/main.js'), // 入口 表示 要使用webpack 打包哪个文件
    output: { // 输出文件的相关的配置
        path: path.join(__dirname, './dist'), // 指定打包好的文件，输出到哪个目录中去
        filename: 'bundle.js' // 这是指定 输出的文件的名称
    },
    devServer: { //这是配置 dev-server 命令参数的第二种形式  相对麻烦
        // --open --port 3000 --contentBase src --hot
        open: true, // 自动打开浏览器
        port: 3000, // 设置启动时候的运行端口
        contentBase: 'src', // 指定托管的根目录
        hot: true, // 启用热更新 的第一步
    },
    // 插件
    plugins: [ // 配置插件的节点
        new webpack.HotModuleReplacementPlugin(), // new 一个热更新的模块对象，这是启用热更新的第三步    

        new htmlWebpackPlugin({ // 创建一个在内存中生成html页面插件
            template: path.join(__dirname, './src/index.html'), // 指定模板页面，将来会根据指定的页面路径， 去省城内存中的页面
            filename: 'index.html' // 指定生成的页面的名称
        })
    ],
    module: { // 这个节点， 用于配置第三方模块加载器
        rules: [ // 所有第三方模块的匹配规则
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            // 配置处理 .css 文件的第三方loader规则 从右到左调用 最右边处理了 交给前面一个处理 ，处理完了再交给前一个 ， 知道没有了
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            //这是配置处理 .less 文件的第三方loader规则
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=32552&name=[hash:8]-[name].[ext]' },
            // cnpm i url-loader file-loader（url-loader内部依赖） -D
            // 处理图片 路径的loader 
            // limit 给定的值是图片大小， 单位是byte 如果我们引用的图片， 大于或者等于给定的limit值，则不会被转为base64格式的字符串， 如果小于给定的值，或被转为base64格式字符串
            // hash 值是32位的 :8 的以为是 截取前8位 名字前带hash值
            // { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader'},
            // 处理字体文件的loader
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
            // 配置babel 来转换高级的es语法

        ]

    }
    // mode: 'development'
}

// 当我们 在控制台输入 webpack 命令执行的时候，webpack做了
