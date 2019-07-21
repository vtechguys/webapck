Module
In Node.js or other module system a file may expose some or all of its content as public to be read in some other file. Create a folder structure like this.

    |-src
	|    |-- index.js
	|    |-- sum.js

The contents of files. sum.js is utility function and index.js is entry point utilizing this sum.js utility. index.js is dependent on sum.js.

    //sum.js 
    cont sum = (a, b) => a + b;
    

<!--stackedit_data:
eyJoaXN0b3J5IjpbMTkzNjg4ODM4NiwtNDAxODA3ODIwLC0yMD
g4NzQ2NjEyXX0=
-->