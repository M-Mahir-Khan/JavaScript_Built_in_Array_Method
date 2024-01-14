// some Method

//some() ek JavaScript array method hai jo array ke har element par di gayi condition ko check karta hai. Yeh method ek boolean value return karta hai - true ya false.

// Yeh method ek callback function le leta hai jo array ke har element ke liye execute hoti hai. Callback function har element ko check karti hai ki kya wo condition ko satisfy karta hai ya nahi. Agar kam se kam ek element condition ko satisfy karta hai, toh some() method true return karta hai. Agar koi bhi element condition ko satisfy nahi karta hai, toh false return hota hai.

const numbers = [1,2,3,4,5]

const result = numbers.some((number)=>{
    return number > 3
})

console.log(result); // output : true