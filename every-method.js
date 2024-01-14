// every method
// every method returns boolen value 

//every() ek JavaScript array method hai jo array ke har element par ek condition check karta hai. Yeh method har element ke liye di gayi condition ko evaluate karta hai aur ek boolean value (true/false) return karta hai, jo batata hai ki kya saare elements condition ko satisfy karte hain ya nahi.

// every() method ek callback function leta hai, jise har array element ke liye execute kiya jata hai. Agar saare elements callback function ke according condition ko satisfy karte hain, tab every() method true return karta hai. Agar ek bhi element condition ko satisfy nahi karta hai, toh every() method false return karta hai.

// 1)
const arr = [1,30,39,29,10,13,]
const isbelow = (currentValue) => currentValue < 40;
console.log(arr.every(isbelow));

// 2)
const isSubset = (array1,array2) => array2.every((element) => array1.includes(element))

console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [1, 7, 6,]));

//3)
const numbers = [2,4,6,8,10,7]
const isEven = (num) => num % 2 === 0;
console.log(numbers.every(isEven));

