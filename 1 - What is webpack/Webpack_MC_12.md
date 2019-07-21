## Module Systems
In Node.js or other module system a file may expose some or all of its content as public to be read in some other file. Create a folder structure like this.

    |-src
	|    |-- index.js
	|    |-- sum.js

The contents of files. sum.js is utility function and index.js is entry point utilizing this sum.js utility. index.js is dependent on sum.js.

    //sum.js 
    const sum = (a, b) => a + b;
    module.exports = sum;
    //index.js
    const sum = require("./sum");
    console.log(sum(10, 5));
Now `node index.js` will run our index.js and we get console 15 as output on running index.js. 
## Webpack
Lets install webpack locally as dev dependency using `npm` or `yarn` . Here I have used webpack@2.2.0 . As for version 2 we need a `webpack.config.js` file which is required by webpack which exposes some minimum configuration for webpack to run.

   

    const  path  =  require("path");
    // Minimum required configuration.
    const  config  = {
	    entry:  "./src/index.js",
	    output: {
		    path:  path.resolve(__dirname, "build"),
		    filename:  "bundle.js"
	    }
    }; 
    module.exports  =  config;

Output property needed to resolve the path to build folder there we contain build file. We my add script in package.json `"build": "webpack".` I  use the  webpack locally installed in project folder![enter image description here](https://res.cloudinary.com/ajcloud/image/upload/v1563726454/webpack-compile-console.png)
We must note that webpack is bundle.js is way more bigger then sum of indiviadual files. What webpack does is something like.
What roughly webpack is doing.

    var  myModules  = [

	    function  sum(){
	    
		    const  sum  = (a, b) =>  a  +  b;
		    
		    return  sum;
	    
	    },
    
	    function(){
	    
		    const  sum  =  myModules[0]();
		    
		    console.log(sum(10, 5));
		    
	    }
    
    ];
    
    var  entryPointIndex  =  1;
    
    myModules[entryPointIndex]();

webpack creates a array and wraps our file content  module in a function and place them inside the modules array. As index.js is entry point of our project thus it is referred at index 1 of array and called at end. The sum module is picked from module referred function at myModules index. And used therebye in our file.
Now to use to bundle inside a html we must make a index.html and add following bare min code.

 

    <!DOCTYPE  html>
    <html>
    <head>
	    <title>Webpack</title>
    </head>
    <body>
	    <script  src="bundle.js"></script>
    </body>
    </html>
Now open in browser an see the output of console.
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE0MzE1Mjg0NzYsLTIxMjI2ODcwMDEsLT
E2OTMwOTgzMzAsNTY1NzY4NzY3LC00MDE4MDc4MjAsLTIwODg3
NDY2MTJdfQ==
-->