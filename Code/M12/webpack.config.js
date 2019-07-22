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
            },
            {
                /*
                
                test: /\.(jpe?g|png|gif|svg)/,
                The old way...
                use:[
                // "url-loader",
                //It needs to decide based on size how image is to appear after
                // it is compressed by image-webpack-loader. So need to pass configurations
                // which are done as.
                {
                loader: "url-loader",
                options: {
                      limit: 40000
                    // This way we are able to provide configuration to url-loader loader
                    // to how compile imagen in webpack flow based on size of compressed
                    // image. If size is <=40000(40KB) then bundle it in bundle.js else
                    // make a seprate
                    }
                },
                "image-webpack-loader"
                ]
                */

                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: (url, resourcePath, context) => {
                                return "assets/" + url;
                            }
                        }
                    },
                    {

                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                            // optipng.enabled: false will disable optipn
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            // the webp option will enable WEBP
                            webp: {
                                quality: 75
                            }

                        }

                    },
                ],

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