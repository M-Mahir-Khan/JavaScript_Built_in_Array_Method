// copywithin method

//copyWithin() ek JavaScript array method hai jo array ke elements ko modify karta hai, unhe copy karke aur unhi array mein shift karta hai, specified start aur end indices ke beech.

// Yeh method ek array ke elements ko ek specified range ke andar copy karta hai aur use dusre specified index se replace karta hai. Isse array ke content change hota hai, lekin uska length remain karta hai.
//1)

const arr = [1,2,3,4,5,6]
const first = arr.copyWithin(1,2,4)
console.log(first); // Output ; [1, 3, 4, 4, 5, 6]