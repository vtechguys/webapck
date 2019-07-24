// const sum = require("./sum");
// console.log( sum(10, 5) );
import sum from "./sum";

// This is quiet different import syntax and it is because the image_viewer 
// file is not exporting anything. It just simply needs to run and thus 
// simply imported this way to run it onspot.
import "./image_viewer";


console.log(sum(10, 5));