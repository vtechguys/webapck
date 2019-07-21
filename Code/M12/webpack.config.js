// Path independent of OS.
const path = require("path");

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
                use: ["style-loader", "css-loader"],
                test: /\.css$/
            }
        ]
    }
};
module.exports = config;