# Module Systems
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
<!--stackedit_data:
eyJoaXN0b3J5IjpbNTY1NzY4NzY3LC00MDE4MDc4MjAsLTIwOD
g3NDY2MTJdfQ==
-->