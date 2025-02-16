

function hello(a,fun1){
    // a = n = 100
    // fun1 = ()=>{console.log("bunny")}

    console.log(a)
    console.log(fun1)
    fun1()

}



let n = 100 

let bunny = ()=>{console.log("bunny")}

// function bunny(){
//     // console.log("bunny")
//     return "aalam"
// }

hello(n, bunny)
// hello(n, bunny())