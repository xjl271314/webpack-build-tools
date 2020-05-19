const TerserPlugin = require('terser-webpack-plugin') // 引入压缩插件

module.exports = {
    mode: 'none', // 因为默认是production 默认会进行压缩
    entry: {
        "tools": "./src/index.js",
        "tools.min": "./src/index.js"
    },
    output: {
        filename: "[name].js",
        library: "tools",
        libraryExport: "default", // 不添加的话引用的时候需要 tools.default
        libraryTarget: "umd", // var this window ...
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({ // 使用压缩插件
                include: /\.min\.js$/
            })
        ]
    }
}