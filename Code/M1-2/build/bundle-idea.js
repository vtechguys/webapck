var myModules = [
    function sum(){
        const sum = (a, b) => a + b;
        return sum;
    },
    function(){
        const sum = myModules[0]();
        console.log(sum(10, 5));
    }
];
var entryPointIndex = 1;
myModules[entryPointIndex]();