// findIndex method

// findIndex() ek JavaScript array method hai jo array ke elements mein se pehla element ka index return karta hai jo di gayi condition ko satisfy karta hai. Agar koi element condition ko satisfy nahi karta hai, toh findIndex() method -1 return karta hai.

// Yeh method ek callback function le leta hai jo har array element ke liye execute hoti hai. Callback function har element ko check karti hai ki wo condition ko satisfy karta hai ya nahi. Agar koi element condition ko satisfy karta hai, toh findIndex() method uss element ka index return karta hai, nahi toh -1 return hota hai.
// 1)

const numbers = [1,2,3,4,5]

const res = numbers.findIndex(findThree)

function findThree(value){
    return value === 3;
}
console.log(res); // output  2 