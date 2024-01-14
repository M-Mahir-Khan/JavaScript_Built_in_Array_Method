// Array.of() method

// Array.of() ek static method hai jo JavaScript mein Array class ke saath associated hai. Yeh method ek naya array create karta hai, jisme aap jo bhi arguments pass karte hain, unhe elements ke roop mein include karta hai.

// Yeh method specially un scenarios mein kaam aata hai jab aapko ek naya array create karna hota hai, lekin normal Array() constructor ke kuch behavior ke saath confusion hota hai. Jaise ki, Array() constructor ek argument ke saath number of elements define karta hai jabki Array.of() method arguments ko elements ke roop mein include karta hai, chahe kitne bhi arguments ho.

// 1)
const newArray1 = Array.of(1,2,3,4,5)
console.log(newArray1); // Output: [[1, 2, 3, 4, 5]]

//2)
const newArray2 = Array.of("Apple","Banana","Orange")
console.log(newArray2); // Output: ['Apple', 'Banana', 'Orange']

// 3)
const newArray3 = Array.of(true,false,true,true)
console.log(newArray3); // Output: [true, false, true, true]

//4)
const newArray4 = Array.of({name:'Mahir'},{name:'John'})
console.log(newArray4);// Output: [{ name: 'John' }, { name: 'Alice' }]
