

function hello(n, fun1){
    // n = 100 
    //fun1 = function (){console.log("inside bunny")}
    console.log(n)
    console.log(fun1) //function anonymous
    fun1()
}


// let x = 100 

// let bunny = ()=>{console.log("inside bunny")}

// function bunny(){
//     console.log("inside bunny")
// }


// console.log(x, bunny)

// hello(100, ()=>{console.log("inside bunny")})

hello(100, function (){console.log("inside bunny")})


