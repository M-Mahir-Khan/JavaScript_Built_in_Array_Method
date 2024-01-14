// Slice Method

// slice() ek JavaScript array method hai jo existing array se specified range ke elements ko copy karke ek naye array create karta hai.

// Yeh method do parameters leta hai:

// Start Index (Optional): Ye parameter specify karta hai ki copy kahan se shuru hoga. Agar aap is parameter ko nahi dete, toh slice array ke shuru se copy karega.
// End Index (Optional): Ye parameter specify karta hai ki copy kahan tak chalega. Ye index ko include nahi karta. Agar aap is parameter ko nahi dete, toh slice array ke end tak copy karega.

const numbers = [1,2,3,4,5]

const sliceNumber = numbers.slice(1,4)
console.log(sliceNumber);
console.log(numbers);