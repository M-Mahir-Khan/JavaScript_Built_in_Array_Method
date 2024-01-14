// fill method

//fill() ek JavaScript array method hai jo array ke elements ko specified value se fill karta hai, diye gaye start index se lekar end index tak.

// Is method mein aap specify kar sakte hain ki aap kis value se array ko fill karna chahte hain, aur kis range mein (start index se lekar end index tak) fill karna hai.


// 1)
const array1 = [1,2,3,4,5,6]
console.log(array1.fill(2));

// 2)
const array2 = ["Mahir", "Shahid", "Afan", "Irfan","Tanveer"]
console.log(array2.fill("fayaz",1,4));

// 3)
function fillInNumbers(n){
    return Array(n).fill(0).map((_,idx) => idx +1)
}

console.log(fillInNumbers(10));
