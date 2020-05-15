//  使我们项目js的入口文件

// 1. 导入jquery
import $ from 'jquery'


import './css/index.css';
// webpack 默认只能打包处理js类型的文件， 无法处理其他非js 的文件
// 如果要出非js 类型的文件，我们需要手动安装一些第三方的加载器
// 1. 如果想要打包处理css文件， 需要安装 npm i style-loader css-loader -D
// 2. 打开webpack.config.js 文件， 在里面新增一个 配置节点， 叫做module，
//  是一个对象，在这个对象身上， 有一个rules 属性， 是一个数组， 这个数组中存放了所有第三方文件的匹配和处理规则


import './css/index.less';

import './css/index.scss';
// 如果要荣国路径的形式区引入 node_modules中相关的文件，
// 可以直接省略路径前面的node_modules这一层目录，直接写 包的名称，然后后面跟上具体的文件路径
// 不写node_modules目录， 会默认去里面查找
import 'bootstrap/dist/css/bootstrap.css';

// const $ = require('jquery')

class Person {
    // static 关键字， 定义静态属性
    // 所谓的静态属性， 就是 ，可以直接通过类名， 直接访问属性
    // 实例属性， 只能通过类的实例 来访问的属性
    static infor = { name: 'sa', age: 12 }
}

console.log(Person.infor)
//  在webpack 中默认只能处理一部分es6语法  一些更高级的语法 或者es7语法 webpack处理不了，需要第三方loader 把高级语法转为低级语法，再把结果交给webpack去打包到bundle.js 中
// 通过 babel ， 可以将高级的语法转换为低级的语法， 
// 1 在webpack 中， 可以运行一下两套命令， 安装两套包， 安装babel 相关的loader功能
// 第一套包， npm i babel-core babel-loader babel-plugin-transform-runtime -D
// 第二套包 cnpm i babel-preset-env babel-preset-stage-0 -D
// 2 打开webpack配置文件， 在module节点下的rules规则中， 添加一个新的匹配规则
// {test: '/\.js$/', use: 'babel-loader', exclude: /node_modules/ } // (exclude -- 排除)
// 在配置babel的loader规则时， 必须把node_modules 目录， 通过exclude 选项排除掉
// 原因： 1 如果不排除node_modules ，则babel会把node_modules中所有的第三方js文件 都打包编译， 这样， 会非常消耗cpu， 同事， 打包非常慢
//  2 哪怕 最后babel 把所有node_modules 中的js 转换完毕了，但是， 项目也无法正常运行 
// 在项目的根目录中， 新建一个 .babelrc 的babel配置文件， 这个配置文件， 属于json格式， 所以，写.babelrc配置的时候， 必须符合json语法规范， 不能写注释， 字符串必须双引号



var p1 = new Person()
p1.name


// 使用webpack-dev-server 这个工具来实现自动打包编译的功能
// 运行 npm install webpack-dev-server -D 把这个工具安装到项目的本地开发依赖
// 这个工具的用法和webpack 用法 完全一致
// 由于 在项目在安装的 webpack-dev-server 所以无法把它当做脚本命令， 在powershell中直接运行：（只要全局 -g 安装到 ，才可以 在终端中正常执行）
//  webpack-dev-server 帮我们打包生成的bundle.js 文件， 并没有放到实际的物理磁盘上，而是直接托管到了 电脑内存中，所以 我们在项目根目录中，根本找不断哦把包好的bundle.js
//  我们可以认为 webpack-dev-server 这个工具 把打包好的文件 以一种虚拟的形式 托管到了咋们项目的根目录中， 虽然我们看不到他，但是可以认为，和dist ，src, node_modules 平级， 有一个看不见的文件，叫做bundle.js

