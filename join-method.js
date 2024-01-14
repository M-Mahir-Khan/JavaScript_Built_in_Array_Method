//join method

// join() ek JavaScript array method hai jo array ke elements ko concatenate karke ek string banata hai. Is method ka use kisi bhi array ke elements ko ek string mein join karne ke liye kiya jaata hai.

//join() method ek string return karta hai jo array ke elements ko specified separator ke saath join karta hai. Separator ek optional parameter hota hai jo define karta hai ki array ke elements ke beech mein kaunsa character ya string aana chahiye.  

const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
//  output: "Fire,Air,Water"

console.log(elements.join(''));
//  output: "FireAirWater"

console.log(elements.join('-'));
// output: "Fire-Air-Water"