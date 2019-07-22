# Code Splitting
Splitting code into different modules and loading them when required is called as code splitting. Using modules imports every-time will increase the size of complete bundle and it may happen some module code may never be used thus it was useless to load that and thus we need to load minimum js code necessary to give a effective and satisfactory response. And loading js code on demand when required. 

    import  "../style/style.css";
    import  "../style/style2.css";
    import  small  from  "../assets/small.jpeg";
    export  function  imageRederer(){
	    const  image  =  document.createElement("img");
	    image.src  =  small;
	    document.body.appendChild(image);
    }
Also changing the `index.js`.

    // Image Viewer module is to view image say image needs to appear after a button was clicked.
    // So its code can be loaded lately later. When action occured.
    const  button  =  document.createElement("button");
    button.innerText  =  "Click Me!";
    button.onclick  =  function  listenerClick(){
	    // On click here we are going to may some cod that will load the module
	    // We use System whcih is defined by es2015 its aspecial global variable inside js
	    // System.import call is goigng to make browser to go back to server and request for
	    // module there if found module it will send back the module bundle with all those
	    // bundle that this one required. It is a async call and thus return us a promise.
	    // Which if successfully resolved returns a module argument.
	    System.import("./image_viewer").then(module=>{
	    console.log(module); //In in console
	    module.imageRenderer();
	    });
	    // The module 0.bundle.js is loaded on network call after button was clicked.
	    // If we check the bundle.js we will see something like webpackJsonpCallback,
	    // chunkId etc depecting that requested chunk will be loaded based on chunkId.
	    // Now seeing 0.bundle.js we see that it contains our chunk itself.
	    // System.import() is deprecated instead we simply use import() a dynamic import syntax.
	    // Webpack parses to see import() and put logic for dynamic import of chunk. And creates
	    // a new script tag for our chunk when loaded over network.
    }
    document.body.appendChild(button);
On action of button image_viewer is to be loaded that a dynamic import older syntax was `System.import()` which is now replaced by `import()`. Which goes back to server requesting chunk by chunkId as mentioned in bundle.js. This is async action and thus returns promise. The server returns the module if found and promise is successful with load of module 0.bundle.js see network tab. Which contains export to imageRendere function which is then called by us. Dynamic  import call add some extra code in orignal bundle.js to resolve module over network  request by its chunkId. This is how on demand code splitting work using dynamic imports.
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTAxNTM3MjEyN119
-->