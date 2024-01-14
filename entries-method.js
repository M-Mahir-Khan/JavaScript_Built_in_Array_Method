// entries method

// entries ek JavaScript array method hai jo array ke har element ke index-value pairs ko ek iterator object mein convert karta hai. Yeh method array ke har element ka index aur value ek saath lekar iterator object return karta hai.

// Iterator object entries method ke through milta hai aur for...of loop ya Array.from method se iterate kiya ja sakta hai.

const fruits = ["Apple","Banana","Cherry"]
const iterator = fruits.entries()

for (const entry of iterator) {
    console.log(entry);
}

// output : [0, 'Apple']
//          [1, 'Banana'] 
//          [2, 'Cherry']