// const sum = require("./sum");
// console.log( sum(10, 5) );
import sum from "./sum";

// This is quiet different import syntax and it is because the image_viewer 
// file is not exporting anything. It just simply needs to run and thus 
// simply imported this way to run it onspot.
// import "./image_viewer";


// Image Viewer module is to view image say image needs to appear after a button was clicked.
// So its code can be loaded lately later. When action occured.
const button = document.createElement("button");
button.innerText = "Click Me!";
button.onclick = function listenerClick(){
    // On click here we are going to may some cod that will load the module
    // We use System   whcih is defined by es2015 its aspecial global variable inside js
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










console.log(sum(10, 5));