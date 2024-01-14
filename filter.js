// filter method

//filter() ek JavaScript array method hai jo ek naya array create karta hai jisme se sirf un elements ko include karta hai jo di gayi condition ko satisfy karte hain.

// Yeh method ek callback function le leta hai, jo har array element ke liye execute hoti hai. Callback function har element ko check karti hai ki wo condition ko satisfy karta hai ya nahi. Agar element condition ko satisfy karta hai, toh wo element naye array mein shamil hota hai, warna nahi hota.


//  1)
const ages = [12,23,18,19,15,16,19]

function ageCheck(age){
    return age >= 18
}

const adultAge = ages.filter(ageCheck)
console.log(adultAge);



// 2)
const arr = [1,2,3,4,5,6,7,8,9,10,45,46]

function isPrime(num){
    return num % 2 === 0
}
const primeNumber = arr.filter(isPrime)
console.log(primeNumber);

