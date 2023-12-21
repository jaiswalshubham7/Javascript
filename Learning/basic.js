console.log("test console log");


// Data types in js
// 7 primitives    ->  Number, String, BigInt, null, undefined, Symbol, 
// arryes and objects


// Variable declaration in js

var a = 3;      //var varibales can be declare multiple times and having globale scope

var a = 1;
console.log(a);

let b = 2;      //let varibale can be declare only once but can be updated multiple times and have block scope

b = 9;
console.log(b);

const c = 6;    //const variable value cannot be updated.

console.log(c);




// Objects in JS
const product = {
    productName : "TV",
    rating : 4,
    price : 300,
    offer : 40
};

console.log(product);


// Access object variables
// way 1
console.log("rating : " + product.rating);
// way 2
console.log("price : " + product["price"]);


// update object variable value
product.price = product.price + 1;
console.log("price : " + product.price);

product["price"] = product["price"] + 1;
console.log("price : " + product["price"]);

// Note : We can update const object variables but cannot update const variables itself (Memory address should not be change)




// Operators

e=5;
f="5";
g=5;

// '==' is used to compare the two values whether the values have same data type or not

console.log(e==g);   //true
console.log(e==f);   //true


// where '===' is used to compare the values plus there data types (its strict validation)

console.log(e==g);   //true
console.log(e==f);   //false





// Loops

// for loop, while loop

// for of loop
let str = "string";
for(const i of str){
    console.log(i);
}
// output -> s t r i n g


// for in loop
const forObject = {
    a : 5,
    b : 9,
    c : "abc"
};
for (const key in forObject) {
    console.log("key :", key, "value :", forObject[key]);
}





// Strings

let str1 = "abcd";
let str2 = 'abcde';

console.log(str1[0]); // to get characters

// strings are immutable


// Template Literals

let literal = `literal`;

let literal2 = `this is ${str1} .`;  //we can embed expresions using ${} dynamically in literls.

console.log(literal2);



// Arrays

let arr = ["hdf","rer","rege"];

console.log(arr);



let prices = [250, 645, 300, 900, 50];

for(let i=0; i<prices.length; i++){
    prices[i] = prices[i] - (prices[i]/10);
}

console.log("prices :", prices);



// Array methods

// push() : add to end and return size
// pop() : delete from end and return the deleted item
// toString() : return string
// concat() : return merged array
// unshift() : add to start and return size
// shift() : delete from start and return the deleted item
// slice() : return a piece of array -> similar to java substring()

let pushReturn = prices.push(90, 76);
console.log("pushReturn :", pushReturn); //7
console.log("prices :", prices);

let popReturn = prices.pop();
console.log("popReturn :", popReturn); //76
console.log("prices :", prices);

let toStringReturn = prices.toString();
console.log("toStringReturn :", toStringReturn); //225,580.5,270,810,45,90
console.log("prices :", prices);



