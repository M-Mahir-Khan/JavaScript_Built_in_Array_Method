// shift method

// shift() ek JavaScript array method hai jo array se pehle element ko remove karta hai aur use return karta hai. Yeh method array ke starting (index 0) se pehle wale element ko hata deta hai aur array ke length ko ek kam kar deta hai.

// Yeh method ek array ke elements ko modify karta hai aur woh element jo remove kiya gaya hai use return karta hai.

const fruits = ["Apple","Mango","Banana",'Orange']

const removeFruit = fruits.shift()

console.log(fruits);        // ["Mango","Banana",'Orange']
console.log(removeFruit);   // 'Apple'