// hof => higher order functions


// function hello(fun1){

//     fun1()

// }


// function bunny(){
//     console.log("inside bunny")
//     // return ()=>{console.log("Yummy")}
//     return function z(){console.log("Yummy")}
// }


// let x = bunny() // inside bunny Yummy

// // x = z
// x() // Yummy

// bunny()()





// function a(){
//     console.log("Apple")
// }

// let b = a

// b()

function sum(x,y){
return () =>{
    console.log(x*x)
    return()=>{
        console.log(y*y)
        }
    }
}


sum(10,20)()()
// let p = sum(10,20)

// p=()=>{
//     console.log(x*x)
//     return()=>{
//         console.log(y*y)
//     }
// }

// let q = p()//100
// // q = ()=>{console.log(y*y)}
// q() //400