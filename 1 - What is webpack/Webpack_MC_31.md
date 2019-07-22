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

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTEzODk2MTk1NTZdfQ==
-->