const path = require("path");

module.exports = {
    mode: 'development',
    entry: './index.js',
    output: {
        libraryTarget: "umd",
        library: "live2dModels",  // 全局变量名称（绑定到window对象）
        libraryExport: "default",  // 标记该js文件可支持 import 引入
        filename: "live2-models.js",
        path: path.join(__dirname),
    }
}
