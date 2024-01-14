// sort method 

//sort() ek JavaScript array method hai jo array ke elements ko sort karta hai, yani unhe ascending (aapne diye gaye criteria ke mutabiq badhne wale) order mein arrange karta hai.

// Yeh method array ke elements ko default tarah se string ke roop mein sort karta hai. 

const str = ["Z","A","d","b","a","e","c","C"];
str.sort()
console.log(str); // Output : ['A', 'C', 'Z', 'a', 'b', 'c', 'd', 'e']


const numbers = [2,6,3,7,9,1,4,8,5]
numbers.sort((a,b)=>{
    return a-b
})
console.log(numbers); //Output : [1, 2, 3, 4, 5, 6, 7, 8, 9]


const obj = [
    {name:"perso 1",age: 40},
    {name:"perso 2",age: 20},
    {name:"perso 3",age: 50},
    {name:"perso 4",age: 30},
    {name:"perso 5",age: 60}
]

console.log(obj.sort((a,b)=>{
    return a.age - b.age;
}))