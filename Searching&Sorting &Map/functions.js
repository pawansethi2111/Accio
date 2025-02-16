function modify(a){
    console.log("received",a)
    a = 100
    console.log("Inside modify",a)
}

// let a = 50
// modify(a)
// console.log("Outside modify",a)



// let a = 10
// //let a = 20
// for(let i=1;i<=1;i++)
// {
//     console.log("inside 1",a)    
//     console.log(a)    
//     let a = 20 //a-inner    
//     console.log("inside 2",a)
// }

// console.log("Outside",a)


// let count=0

// for(let i=1;i<=10;i++){
//     count = count+1
// }
//console.log()



// let a = 10 //a outer
// function hello(x){ //a outer
//     console.log("inside 1",a) //10
//     a = 20
//     console.log("inside 2",a)
// }
// hello(a*5)  //a outer
// console.log("outer",a)



// function modify(brr)
// {
//     console.log("received",brr)
//     brr[0] = 100
//     console.log("Inside modify",brr)
// }
// // let arr = [10,20,30,40,50] //1000th

// modify(arr)
// let arr  = [10,20,30,40,50] //1000th

// console.log("Outside modify",arr)


function modify(a){
    console.log("received,a")
    a = 100
    console.log()
}