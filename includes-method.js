// includes Method

// includes() ek JavaScript array method hai jo array mein specific value ko search karta hai aur agar wo value array mein mojood hai to true return karta hai, aur agar nahi hai to false return karta hai.

// Yeh method ek value aur optional second parameter le leta hai, jo starting index specify karta hai jahaan se search shuru karna hai.

const fruits = ["Apple","Banana","Orange"];

const result1 = fruits.includes("Banana")
console.log(result1); //Output: true (Banana mojood hai)

const result2 = fruits.includes("Grapes")
console.log(result2);// Output: false (Grapes mojood nahi hai)