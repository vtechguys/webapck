## Webpack on React.js project
Download M4 from codes repo to get started. In this section we are going to download and setup project on rect app. 
Move into the project in terminal npm install, now lets start webpack.config.js file by first adding babel loader.  

    module: {
    	rules: [{
		    	test: /\.js$/,
		    	exclude: /node_modules/,
		    	use: "babel-loader"
    	}]
    }
Now create a `.babelrc` file in there. 

    {
    	"presets": [
    		"@babel/preset-env",
    		"@babel/preset-react"
       ]
    }

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTg1MTkxNzM4NywtMjA4ODc0NjYxMl19
-->