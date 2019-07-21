# Module Loaders
The module loaders are used to do some preprocessing on our files before they are added to our bundle.js file. Like babel is used to transpile the latest ES codes to older ones.
## Adding babel
Babel turns ES@latest code into older codes to be able to run on old browser. Whereas simply webpack is to link js modules together.

    npm install babel-loader @babel/cli @babel/core @babel/node @babel/preset-env @babel/preset-react @babel/register --save-dev

Not all are required to be understood now. Important are:
**babel-loader:** *teaches babel how to interact and work with webpack.*
**babel-core:** *knows how to take in code parse it and generate some output files.*
**babel-preset-env:** *ruleset for telling babel exactly what pieces of ES@latest syntax to look for and how to turn in ES5 code.*
 Thus babel loader needs to be put to interact with webpack. Loaders are to be operated on certain type of file, like babel needs to be applied on js file only.

    const  path  =  require("path");
	// Minimum required configuration.
    const  config  = {
	    entry:  "./src/index.js",
	    output: {
		    path:  path.resolve(__dirname, "build"),
		    filename:  "bundle.js"
	    },
	    module: {
		    rules: [
			    {
				    use:  "babel-loader",
				    exclude: /node_modules/,
				    test: /\.js$/,
			    }
		    ]
	    }
    };
    module.exports  =  config;
      
`module` property is new name for loaders property as from webpack2. Loaders are considered part of module system. `module` property have property called `rules` which is array of different loaders we may be used for `js, jsx, css, image`. A rule is js object which specify `use` property to tell which loader is to be used. It can be an array which is processed from right to left. Then comes `test` property a `regex` to put this loader on regex matching  files. `exclude` is property to exclude folder/files in this processing.

As babel-core does not know what code to map transpilations to so when babel starts it looks for file `.babelrc` in root. Here we specify some babel configurations like preset to be used to tell it what exactly changes to be made to our code. In `.babelrc`:

    {
    	"presets":["@babel/preset-env"]
    }
So now we may test es import and export statement also if babel was successfully setup then this will work.
## Adding CSS loader
Style and css loader help us to make small css files and import those css files at required places/components(reactjs). Thus development is lot easier now. We will make a `image_viewer.js` file which simply has to append to DOM an img tag. 

**css-loader:** *knows how to deal open and read with css imports.* 
**style-loader:** *take css import and add them to html document.*

Code in image_viewer.js:

    import  "../style/style.css";
    const  image  =  document.createElement("img");
    image.src  =  "http://lorempixel.com/400/400";
    document.body.appendChild(image);

Here I made a folder style in root folder. Put here a file called style.css and put following styling:

    img{
    	border: 10px  solid  black;
    }
The changes in webpack config are in modules where we add another rule set for css files. In `module.rules` add this rule.

    {
    	// applied from right to left
    	use: ["style-loader", "css-loader"],
    	test: /\.css$/
    }
Now when we run build script and see bundle.js we will see the html output in browser and we can see the image has a border.
![browser screenshot of applied css](https://res.cloudinary.com/ajcloud/image/upload/v1563734695/webpack-style-loader.png)

Now if we see the element in developer tools we will find that the style is being applied in the head in style tags.

![webpack-css-loader-elements-devtools-ss](https://res.cloudinary.com/ajcloud/image/upload/v1563734931/webpack-css-loader-elements-devtools-ss.png)

We created this html doc ourselves how could webpack have put this styling in our html. However on disk there is no change in file but in browser it seems there is some change? This means the change is occuring from bundle.js as its only thing we included in our html file manually. That means our style was somehow exported to bundle.js itself. This can be verified if we search in bundle.js file for css we put. 

    "img{\\n border: 10px solid black;\\n}\"

 The raw css is transformed as string and is pushed html document after page bundle.js is loaded. 
 
 The flow: The image_viewer file imports css file. css-loader reads the content of this .css file and reads it to convert to long string and sticks it to bundle.js file. Then style-loader looks at string and push some code in bundle.js to take that string put it inside its own style tag inside html head once bundle.js is completely loaded and run.
 
 But that's not behaviour we ever want not only it increases the size of bundle,js but separations of concerns and browser requesting different files differently in parallel are not being used.
 What we want is to bundle all such css to one place. And refer that in index.html file.
 
 For this we need to install a plugin that takes texts string  generated by css-loader and stuff that into a css file also preventing it from ending being compiled in bundle.js.
 

    npm i extract-text-webpack-plugin@2.0.0 --save-dev

Plugins have different pipeline then the webpack. The above plugin is not supported though its us can be seen in code repo.
Its new plugin for purpose is:	

    npm install --save-dev mini-css-extract-plugin

 This generates a single style css file. But for it to work manually add a link tag and add a refer to `./style.css` 

## Adding Image loaders
Images from local can be loaded in two ways first image can be included in bundle.js as raw data or else it can be separately put into assets directory. For It to work we need two packages.

    npm install image-webpack-loader url-loader --save-dev

The first one image-webpack-loader loader is used to compress image and then urls loader decide based on size of image that this needs to be included in bundle.js or as assets directory.

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
	    
	    loader:  'file-loader',
	    
	    options: {
	    
	    outputPath: (url, resourcePath, context) =>{
	    
	    return  "assets/"  +  url;
	    
	    }
	    
	    }
	    
	    },
	    
	    {
	    
		    loader:  'image-webpack-loader',
		    options: {
		    mozjpeg: {
			    progressive:  true,
			    quality:  65
			    },
		    // optipng.enabled: false will disable optipn
			    optipng: {	    
			    enabled:  false,
			    },
			    
			    pngquant: {
			    
			    quality:  '65-90',
			    
			    speed:  4
		    
		    },
		    
		    gifsicle: {
		    
		    interlaced:  false,
		    
		    },
		    
		    // the webp option will enable WEBP
		    
		    webp: {
		    
		    quality:  75
		    
		    }
		    
		    }
		    
		    },
	    ],
    
    }

<!--stackedit_data:
eyJoaXN0b3J5IjpbMjEwOTc5MjYxNywtNDc1ODU4MDI4XX0=
-->