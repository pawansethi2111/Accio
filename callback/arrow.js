//  var hello

// hello()

// function hello(){
//     console.log("inside hello")
// }

// hello() // inside hello

// console.log(hello)

// var hello = () => {
//     console.log("inside hello")
// }

// hello() // inside hello



function sum(a,b){
    let add= a+b
    return add
}

let sum  = (a,b) => a+b

console.log(sum(10,20)) //30


// function square(x){
//     return x*x
// }

let square = x => x*x

console.log(square(10))