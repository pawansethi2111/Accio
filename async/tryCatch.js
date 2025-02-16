console.log(a)


console.log("Hello")

console.log("World")

console.log("Hi")

console.log("Bye")


// try{
//     console.log("A")
//     console.log(a)
//     console.log("B")
// }
// catch(err){
//     console.log("Error")
// }

// console.log("Hello")



// console.log("A")
// try{    
//     console.log(a)    
// }
// catch(err){
//     console.log("Error",err.name)
// }
// console.log("B")
// console.log("Hello")


// try and catch is sync and not async


// let n = 13
// try{
//     if(n%2!=0){
//     throw new Error("odd")
// }
// }
// catch(err){
//     console.log("Error",err.message)
// }
// console.log("even")

try{
    // let a
    console.log(a)
}
catch(err){
    console.log("Error",err.message)
}

finally{
    console.log("Finally")
}