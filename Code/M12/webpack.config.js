// Path independent of OS.
const path = require("path");

// Minimum required configuration.
const config = {
    entry: "./src/index.js", 
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                use: "babel-loader",
                exclude: /node_modules/,
                test: /\.js$/,


            }
        ]
    }
};
module.exports = config;