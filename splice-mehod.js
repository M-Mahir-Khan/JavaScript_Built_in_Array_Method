// splice method 

// splice() ek JavaScript array method hai jo array ko modify karta hai, elements ko remove aur add karke, specified index se lekar ek certain range tak.

// Yeh method teen parameters leta hai:

// Start Index: Ye parameter specify karta hai ki splice kahan se shuru hoga.
// Delete Count: Ye parameter batata hai ki kitne elements ko remove karna hai starting index se.
// Items to Add (Optional): Agar aap elements ko add karna chahte hain, toh aap yahan specify kar sakte hain.

const names = ["Mahir","Danish","fayyaz","Shahid"]

 names.splice(2,0,"Irfan","Afan")
console.log(names);


const color = ["Red","Green","Blue","Yellow"]
const removeColor = color.splice(1,2,"Orange","Green")
console.log(color);
console.log(removeColor);