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
Lets install webpack locally as dev dependency using `npm` or `yarn` . Here I have used v2
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTU0NTEwODM3MSw1NjU3Njg3NjcsLTQwMT
gwNzgyMCwtMjA4ODc0NjYxMl19
-->