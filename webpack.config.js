const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const PostCssPresetEnv = require('postcss-preset-env')

module.exports = {
    mode: 'development',
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",
        // 告訴webpack不使用箭頭
        environment: {
            arrowFunction: false
        }
    },

    // 指定webpack打包時要使用的模組
    module: {
        // 指定載入規則
        rules: [
            {
                // test 指定規則生效的文件
                test: /\.ts$/,
                // 要使用的loader(順序是從後往前執行，索引大的先執行)
                use: [
                    {
                        // 設定babel
                        loader: "babel-loader",
                        options: {
                            // 設定預定義的環境(要在那些瀏覽器執行)
                            presets: [
                                [
                                    // 指定環境套件
                                    "@babel/preset-env",
                                    {
                                        // 要相容的瀏覽器
                                        targets: {
                                            "chrome": "88",
                                            "ie": "11"
                                        },
                                        // 指定corejs版本
                                        "corejs": "3",
                                        // 只用corejs的方式 "usage"按照需要載入(用哪個才載入)
                                        "useBuiltIns": "usage"
                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader'],
                // 要排除的文件
                exclude: /node-modules/
            },
            // 設定less檔案的處理
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    new PostCssPresetEnv({
                                        browsers: 'last 2 versions'
                                    })
                                ]
                            }
                        }
                    },
                    "less-loader"
                ]
            }
        ]
    },
    // 設定webpack套件
    plugins: [
        new HTMLWebpackPlugin({
            title: "Webpack App",
            template: "./src/index.html"
        }),
        new CleanWebpackPlugin()
    ],

    // 設定使用自訂模組
    resolve: {
        extensions: ['.ts', '.js']
    }
}
