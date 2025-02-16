// let => block scope



let a = "apple"  // global variable


if(true){
    let b = "banana" // local variable
    a = 1000
}



for(let i=1; i<=1; i++){
    let c = "cherry" // local variable
    a = 2000
}


function hello(){
    let d = "date" // local variable
    a = 3000
}

// hello()


console.log(a)

