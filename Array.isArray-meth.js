// Array.isArray method

// Array.isArray() ek JavaScript method hai jo yeh check karta hai ki ek variable ek array hai ya nahi. Is method ka use kisi bhi variable ko check karne ke liye ki wo ek array hai ya nahi.

// Yeh method ek boolean value (true/false) return karta hai. Agar diya gaya variable ek array hai toh yeh true return karta hai, warna false return karta hai.

const array1 = [1, 2, 3];
const array2 = "Hello";
const array3 = { 0: 'apple', 1: 'banana', length: 2 };

console.log(Array.isArray(array1)); // Output: true (array1 ek array hai)
console.log(Array.isArray(array2)); // Output: false (array2 ek string hai, not an array)
console.log(Array.isArray(array3)); // Output: false (array3 ek object hai, not an array)