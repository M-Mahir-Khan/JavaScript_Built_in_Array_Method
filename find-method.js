// Find Method


//find() ek JavaScript array method hai jo array ke elements mein se pehla element return karta hai jo di gayi condition ko satisfy karta hai. Agar koi element condition ko satisfy nahi karta hai, toh find() method undefined return karta hai.

// Yeh method ek callback function le leta hai jo har array element ke liye execute hoti hai. Callback function har element ko check karti hai ki wo condition ko satisfy karta hai ya nahi. Agar koi element condition ko satisfy karta hai, toh find() method uss element ko return karta hai, nahi toh undefined return hota hai.

//  1) 
const person = [
    {
        name: 'Mahir',
        age: '16'
    },{
        name:'Shahid',
        age: '17'
    },{
        name: 'Fayaz',
        age:17
    }
];

const age = person.find(findName).age

function findName(person){
    return person.name === 'Mahir'
}

console.log(age);