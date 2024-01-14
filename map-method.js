// Map method
//map() ek JavaScript array method hai jo ek naya array create karta hai, jisme har element ko transform karke include kiya jata hai, base kiya gaya ek callback function ke through.

// Yeh method ek callback function le leta hai jo har array element ke liye execute hoti hai. Callback function do parameters leti hai: currentValue (current element value) aur index (current element index).

// map() method existing array ke har element par callback function ko apply karta hai aur callback function se return kiya gaya result naye array mein shamil hota hai.
// 1)

const num = [1,45,12,54,78,16]
const add = num.map(n => n + 1)
const multiply = num.map(n => n*2)

console.log(add);
console.log(multiply);


// Make an array of strings of the names
function namesOnly(arr){
  return arr.map((person) => person.name)
  
}

console.log(namesOnly([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])); 

// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

// Take an array of numbers and make them strings
function stringItUp(arr){
  return arr.map((num) => String(num))
}

console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]