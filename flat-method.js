// flat method

//lat() ek JavaScript array method hai jo nested arrays (arrays mein arrays) ko flatten karta hai, yaani unhe ek level par reduce kar deta hai. Is method se nested arrays ke elements ko unke parent array mein merge kiya jaata hai.

// Yeh method ek optional depth parameter bhi le sakta hai, jo determine karta hai ki kitne levels tak arrays ko flatten kiya jaaye. Agar depth parameter nahi diya gaya hai, toh default level 1 hota hai, yaani sirf ek level tak flatten hoga.

//1)
const nestedArray = [1,2,[3,4,[5,6]]]
const flattendArray = nestedArray.flat()
console.log(flattendArray); //Output: [1, 2, 3, 4, [5, 6]]


//2)
const nestedArray2 = [1, 2, [3, 4, [5, 6]]];
const deeplyFlattenedArray = nestedArray2.flat(2);
console.log(deeplyFlattenedArray); // Output: [1, 2, 3, 4, 5, 6]