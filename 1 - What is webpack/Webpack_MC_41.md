## Webpack on React.js project
Download M4 from codes repo to get started. In this section we are going to download and setup project on rect app. 
Move into the project in terminal npm install, now lets start webpack.config.js file by first adding babel & css loader.  

    module: {
    	rules: [{
		    	test: /\.js$/,
		    	exclude: /node_modules/,
		    	use: "babel-loader"
    	},{
			test: /\.css$/,
			use: ["style-loader", "css-loader"]
		}]
    }
Now create a `.babelrc` file in there. 

    {
    	"presets": [
    		"@babel/preset-env",
    		"@babel/preset-react"
       ]
    }
Now run script `npm rum build`. This will yield gigantic bundle and a list of warnings about exceeded recommended size limit.
Now we have to optimise the bundle.js size this can be done splitting code inside our app currently bundle is made up of vendor files like react.js,  redux from our own code. 

This will help us separate code into two bundle. One vendor.js and other bundle.js. This technique will improve performance by making browser cache the generated bundles. The vendor code does not changes frequently and so this can be caused for later use. however our written code bundle.js changes frequently and thus must be always downloaded from server where vendor.js could be picked from local cache from previous visit. The browser assets caching looks for exact name of file while fetching and if name differ download the new files else use cache version.
 
 First changing the webpack.config.js we will change some entry property to split code based on entry point.
 

    // entry: "./src/index/js",
    entry: {
		bundle: "./src/index.js",
		vendor: VENDOR_LIBS
	},
	output: {
		
	}

 This instruct  webpack two make two bundles `bundle.js` and `vendor.js`. And `bundle.js` will be built from `index.js` and all what `index.js` is depending upon. Next-up `vendor.js` will be made from all libraries that are mentioned inside `VENDOR_LIBS` array. `output` property was changed for `filename` bcz in `entry` point itself we provided the entry point file names and we want to keep using that thus `[name].js` where `[name]` serve as variable filled by webpack while compiling bundles.

     const VENDOR_LIBS = [
    	"faker",
    	"lodash",
    	"react",
    	"react-dom",
    	"react-input-range",
    	"react-redux",
    	"react-router",
    	"redux",
    	"redux-form",
    	"redux-thunk"
    ];

Now run the `npm run build` we see that the file `vendor.js` is built separately and is large size but the `bundle.js` size is not being reduced? 
This is because `index.js` file had some imports for react, redux which it depends upon and thus these are also compiled in `bundle.js` but whole point of code splitting this way for `vendor.js` was to separate the codes. To solve this we may use a plugin called [`SplitChunksPlugin`](https://webpack.js.org/plugins/split-chunks-plugin/) ( CommonsChunkPlugin is deprecated ). Now the chunks following code outputs the vendor chunks differently.  Add `optimization` key to config.

    optimization: {
    	spiltChunks: {
    		chunks: "all"
       }
    }
Now in dist we generate the `bundle.js, vendor.js` and `vendors~bundle~vendor.js`. The optimisation of webpack will bundle chunks of code together bunlde.js contains pure code we wrote. vendor.js some code from vendors and vendorsbundlevendor to containd some common code b/w two. 
After doing this we will see error in console if we open the index.html. As we previously have manually generated the index.html and linked the scripts so this is not happening with other things we generated. So this needs to be fixed but manually each time may be headache so using a plugin. 
We will use plugin called html-webpack-plugin from npm. And use it as following in our webpack config.

    //Top of file
    const HtmlWebpackPlugin = require("html-webpack-plugin");
    //in config add plugins property.
    plugins: [ 
	    new HtmlWebpackPlugin(),
	]
Create a html index.html with minimal elements and a div with id root. Plugin will auto generate html script tags adding bundles to it.
Browser cache file by name if name changes the file content is assumed to be changed. But if names are same thus file is assumed to be same always and picked from cache. 
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTEzNTcwNTE3OTUsMTg1MTU0NjUyNCwxMT
U4NTkyOTUyLC02MzY3NjkyMzcsLTIwODg3NDY2MTJdfQ==
-->