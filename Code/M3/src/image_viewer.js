import "../style/style.css";
import "../style/style2.css";



// import big from "../assets/big.jpeg";
import small from "../assets/small.jpeg";




// const image = document.createElement("img");
// image.src = "http://lorempixel.com/400/400";
// document.body.appendChild(image);

// const image1 = document.createElement("img");
// image1.src = big;
// console.log(big);
// document.body.appendChild(image1);

export function imageRederer(){
    const image2 = document.createElement("img");
    image2.src = small;
    document.body.appendChild(image2);
}

