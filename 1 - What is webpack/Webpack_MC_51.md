## Dev-server webpack
In the past to build our project we had to rerun build script every-time even for a small change. The dev-server will watch our code for any changes and will build automatically but only the files that were changed. 

    npm install webpack-dev-server --save-dev
Now in `package,json` file.

    "build": "npm run clean && npm run server",
    "server": "webpack-dev-server --open"
In webpack.config.js we hav to change.

    devServer: {
    	contentBase: path.join(__dirname, "dist"),
    	compress: true,
    	port: 9000
    }
## Deployment using webpack
Define plugin is used to create global constants that can be used to configure things at compile time chiefly used to configure the development and production environments.
In webpack.config.js add this plugin.

    plugins: [
    	... ,
    	new webpack.DefinePlugin({
    		'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)	
	    })
    ] 
Make sure keys and values are string in this case to ensure string output we may wrap value in `JSON.stringify()`. Next us adding `NODE_ENV=production` in build script. Or simply we may add new property `mode` as `development` in webpack.config.js whoes default value is production.

<!--stackedit_data:
eyJoaXN0b3J5IjpbNzMxNjA4NTkxXX0=
-->