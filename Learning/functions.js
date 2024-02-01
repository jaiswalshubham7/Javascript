
// Functions in js

function myFunction(){
    console.log("inside function");
}

myFunction();


function myFunctionWithParam(msg){
    console.log(msg);
}

myFunctionWithParam("Param function");


// Arrow Function

const multiply = (a, b) => {
    return a*b;
};

console.log("ArrayFunction", multiply(4, 5));



// ForEach

let numArray = [5, 2, 7, 6];

numArray.forEach((num) => {
    console.log(num**2);
});



// map

let mapReturn = numArray.map((num) => {
    return num*num;
});

console.log("Map",mapReturn);


// Filter

let filterReturn = numArray.filter((num) => {
    return num % 2 !== 0;
});

console.log("filter",filterReturn);



