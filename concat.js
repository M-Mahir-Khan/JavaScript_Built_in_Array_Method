// Concat method

//concat() ek JavaScript array method hai jo do ya zyada arrays ko ek naye array mein merge karta hai. Is method ka use arrays ko combine karne ke liye kiya jaata hai, jisse ek naya array banta hai jisme pehle wale arrays ke elements shamil hote hain.

// Yeh method original arrays ko modify nahi karta hai, balki unke copies ko lekar unhe merge karke ek naya array create karta hai.


const array1 = ['a','b','c'];
const array2 = ['d','e','f']
const array3 = array1.concat(array1);

console.log(array3); // output ['a','b','c','d','e','f']