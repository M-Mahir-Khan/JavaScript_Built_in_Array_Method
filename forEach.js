// forEach method

// forEach() ek JavaScript array method hai jo ek callback function ko har array element par execute karta hai.

// Yeh method ek callback function ko le leta hai jo har array element ke liye execute hoti hai. Callback function ko teen parameters milte hain: currentValue (current element value), index (current element index), aur array (array jisme iteration ho rahi hai).

// forEach() method ke through, aap har ek array element par specific action perform kar sakte hain, jaise ki element ko display karna, usko modify karna, ya usse koi aur operation karna.
// 1)

const arr =[1,2,3,4,5,6,78,465,78]

arr.forEach((n,i,arr)=>{
    console.log(n,i,arr);
})

// 2)

const names = ['Mahir','Shahid','Irfan','fayyaz']

names.forEach((n)=> {
    console.log("Mohammed " + n);
})