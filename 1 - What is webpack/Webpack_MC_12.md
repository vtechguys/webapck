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

Output property needed to resolve the path to build folder there we contain build file. 
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE2NTc3MjkwOTQsLTE2OTMwOTgzMzAsNT
Y1NzY4NzY3LC00MDE4MDc4MjAsLTIwODg3NDY2MTJdfQ==
-->