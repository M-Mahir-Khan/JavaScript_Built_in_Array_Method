// Reduce method

// reduce() ek JavaScript method hai jo arrays ko manipulate karne mein use hota hai. Is method ka use kiya jaata hai array ke elements ko combine karke ek single value mein convert karne ke liye. Is method mein ek function parameter hota hai jise hum accumulator kehte hain, jo values ko accumulate karta hai aur ek final result produce karta hai.

// Yeh function do parameters leta hai:

const numbers = [1,2,3,4,5,]

const sum = numbers.reduce((accumulator,currentValue)=>{
    return accumulator + currentValue;
}) // 0 ek initial value he

console.log(sum); // Output : [ 1+2+3+4+5] = 15




// Turn an array of numbers into a long string of all those numbers.

const array = [1,2,3,4,5,6,7,]

const concatValue = array.reduce((accumulator,currentValue)=> accumulator + currentValue,'')
console.log(concatValue);


// Turn an array of voter objects into a count of how many people voted
function totalVotes(arr) {
    return arr.reduce((totalVoters, person) => person.voted ? totalVoters + 1 : totalVoters, 0);
 }
 
 var voters = [
     {name:'Bob' , age: 30, voted: true},
     {name:'Jake' , age: 32, voted: true},
     {name:'Kate' , age: 25, voted: false},
     {name:'Sam' , age: 20, voted: false},
     {name:'Phil' , age: 21, voted: true},
     {name:'Ed' , age:55, voted:true},
     {name:'Tami' , age: 54, voted:true},
     {name: 'Mary', age: 31, voted: false},
     {name: 'Becky', age: 43, voted: false},
     {name: 'Joey', age: 41, voted: true},
     {name: 'Jeff', age: 30, voted: true},
     {name: 'Zack', age: 19, voted: false}
 ];
 console.log(totalVotes(voters))
