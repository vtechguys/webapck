// Path independent of OS.
const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// Minimum required configuration.
const config = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js"
    },
    mode: "development",
    module: {
        rules: [
            {
                use: "babel-loader",
                exclude: /node_modules/,
                test: /\.js$/,


            },
            {
                // applied from right to left
                // use: ["style-loader", "css-loader"],
                // use: ExtractTextPlugin.extract({
                //     use: 'css-loader'
                // }),
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // you can specify a publicPath here
                            // by default it uses publicPath in webpackOptions.output
                            publicPath: '../',
                            hmr: process.env.NODE_ENV === 'development',
                        },
                    },
                    'css-loader',
                ],
                test: /\.css$/
            }
        ]
    },
    plugins: [
        // new ExtractTextPlugin('style.css')
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            // filename: '[name].css',
            // chunkFilename: '[id].css',
            filename: 'style.css',
            // chunkFilename: '[id].css',
        }),
    ]
};
module.exports = config;