// Array.from Mmethod

// Array.from JavaScript mein Arrays ko create karne ke liye use hota hai. Array.from() ek built-in JavaScript method hai jo non-array objects ko arrays mein convert karta hai.

// Yeh method ek iterable object (jaise ki array-like object ya iterable object) ko lekar ek naya array create karta hai, jisme us iterable object ke elements hote hain.

const arrayLike = { 0: 'apple', 1: 'banana', 2: 'orange', length: 3 };

const newArray = Array.from(arrayLike)
console.log(newArray);


const rangeOfNumbers = {length:11};

const evenNumbersArray = Array.from(rangeOfNumbers,(_,index)=> (index + 1)*2)

console.log(evenNumbersArray);