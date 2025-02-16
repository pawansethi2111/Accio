


function hello(fun1){
   
    
    console.log("inside hello",fun1)
    // fun1 = ()=>{ greet("Abhishek")}
    fun1()


}


// function fun1(){
//     greet("Abhishek")
// }




// function greet(name){
//     console.log("Good Morning",name)
// }

let greet = (name)=>{ console.log("Good Morning",name)}


// hello(greet("Abhishek"))

hello(()=>{ greet("Abhishek")})


//  () => { greet("Abhishek")}


// hello(function(){
//     greet("Abhishek")
// })




// hello(greet("Abhishek")) 



// function (){
//      hello()
// }