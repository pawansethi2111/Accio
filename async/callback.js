// step 1: call dominos
// step 2:dominos will start preparing pizza
// step 3:start delivery
// step 4:delivery completed
// step 5:we will eat pizza

// console.log("step 1: call dominos");
// console.log("step 2:dominos will start preparing pizza");
// console.log("step 3:start delivery");
// console.log("step 4:delivery completed");
// console.log("step 5:we will eat pizza");


// setTimeout(()=>{console.log("step 1:call dominos")},2000)
// setTimeout(()=>{console.log("step 2:dominos will start preparing pizza")},5000)
// setTimeout(()=>console.log("step 3:start delivery"),3000)
// setTimeout(()=>console.log("step 4:delivery completed"),2000)
// setTimeout(()=>console.log("step 5:we will eat pizza"),1000)


// all these are staring with the same time and thats a problem
// setTimeout(()=>{console.log("step 1:call dominos")},2000)
// setTimeout(()=>{console.log("step 2:dominos will start preparing pizza")},7000)
// setTimeout(()=>console.log("step 3:start delivery"),10000)
// setTimeout(()=>console.log("step 4:delivery completed"),12000)
// setTimeout(()=>console.log("step 5:we will eat pizza"),13000)




// setTimeout(()=>{
//     console.log("step 1:call dominos")
//     setTimeout(()=>{
//         console.log("step 2:dominos will start preparing pizza")
//         setTimeout(()=>{
//             console.log("step 3:start delivery")
//             setTimeout(()=>{
//                 console.log("step 4:delivery completed")
//                 setTimeout(()=>{
//                     console.log("step 5:we will eat pizza")
//                 },1000)
//             },2000)
//         },3000)
//     },5000)
// },2000)



// callback hell => resolve through promises



// console.log("step 1: call dominos");
// console.log("step 2:dominos will start preparing pizza");
// console.log("step 3:start delivery");
// console.log("step 4:delivery completed");
// console.log("step 5:we will eat pizza");


// function eatPizza(work,time){
//     return new Promise((resolve,reject)=>{
//         setTimeout(work,time)
        
//         setTimeout(resolve(work()),time)
//     })
// }

// eatPizza(()=>{return("step 1:call dominos")},2000)
// .then((data)=>{console.log("Success",data)})
// .catch(err=>console.log(err))


function eatPizza(work, time){


    return new Promise((resolve, reject)=>{
         setTimeout(()=>resolve(work()),time)

        //  setTimeout( resolve()  , 2000)
    })

}

// eatPizza(()=>{return("step 1:  call dominos")}, 2000)
// .then((data)=>{console.log(data)
// })

// .catch(err => console.log(err))




// return new Promise((resolve, reject)=>{
//     setTimeout(resolve(work()),time)

//    //  setTimeout( resolve()  , 2000)
// })



eatPizza(()=>{console.log("step 1:  call dominos")}, 2000)

.then(()=>eatPizza(()=>{console.log("step 2")}, 5000))

.then(()=>eatPizza(()=>{console.log("step 3")}, 3000))

.then(()=>eatPizza(()=>{console.log("step 4")}, 2000))

.then(()=>eatPizza(()=>{console.log("step 5")}, 1000))

.catch(err => console.log(err))


// Element.style.cssText = `
//     background-color: red;
//     color: white;
//     font-size: 20px;
//     padding: 20px;
//     border-radius: 10px;
//     margin:

// `

// Element.style.backgroundColor = "red"


// let obj = {
//     color: "white",
//     fontSize: "20px",
//     padding: "20px",
//     borderRadius: "10px"
// }

// Object.assign(Element.style, obj)


