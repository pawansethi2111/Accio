
//pizza
//pending 
//success
//failed

//process success => resolve
// process fail => reject

let promise1 =  new Promise((resolve,reject)=>{
    let n = 56
    if(n%2==0){
        resolve("even")
    }
    else{
        reject("odd")
    }
})


promise1.then((data)=>{
    console.log("success",data)
})

promise1.catch((data)=>{
    console.log("failed",data)
})

promise1.finally(()=>{
    console.log("finally")
})


// then catch finally is async
// try catch finally is sync


// let p1 = new Promise((resolve,reject)=>{
//  setTimeout(()=>{
//     resolve("step 1:call dominos")
//  },2000)   
// })

// p1.then(data =>console.log(data))
// p1.catch(err=>console.log(err))

// new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//         resolve("step 1:call dominos")
//     },2000)
// }).then(data=>console.log(data))
// .catch(err=>console.log(err))


// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(1)
//     },100)
// })
// .then(data=>{
//     console.log(data)
//     return data*2 //new Promise((resolve,reject)=>{resolve(data*2)})
// })
// .then(data=>{console.log(data)
//     return data*2 //Promise.resolve(data*2)
// })
// .then(data=>{
//     console.log(data)
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(data*2)
//         },2000)
//     }
// })
// .then(data=>console.log(data))
// .catch(err=>console.log(err))


// let p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(1)
//     },1000)
// })

// p1.then(data=>{
//     console.log(data)
//     return data*2
// })  

// p1.then(data=>{
//     console.log(data)
//     return data*2
// })  
// p1.then(data=>{
//     console.log(data)
//     return data*2
// })  
// .then(data=>console.log(data))
// p1.catch(err=>console.log(err))



let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(1)
    },1000)
})

p1.then(data=>{
    console.log(data)
    return data*2
})
.then(data=>{
    console.log(data)
    return data*2
})
.then(data=>{
    console.log(data)
 
})