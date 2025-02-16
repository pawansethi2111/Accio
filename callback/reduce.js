

// let arr = [10,20,30,40,50]

// let x = arr.reduce((sum,value,index)=>{return sum+value},0) //150

//if 0 is not written , sum takes arr[0] value as default
// let x  = arr.reduce((sum,value,index)=>{return sum+value})


//2nd parameter is sum ka default value i.e. 0
// console.log(x) //150


// let arr = [10,20,[30,40,50],60,70,[80,90],100]
// let brr = []
// console.log(arr.flat())


// Q-1 without using flat function reduce the array arr [10,20,30,40,50,60,70,80,90,100]
//not this one=================================================================
// for(let t of arr){
    // if(Array.isArray(t)){
        // let crr = [...t]
        // for(let x of crr){
        //     brr.push(x)
        // }
//     }
//     else{
//         brr.push(t)
//     }
// }

// this one is the answer====================================================================
// let x = arr.reduce((flatten,item,index)=>{
//     console.log(flatten) //[10,20]
// if(Array.isArray(item)){
//     let c = []
//     for(let x of item){
//         c.push(x)
//     }
//     return [...flatten,...c]    
// }
// else{
//  return [...flatten,item]
// }
// },[])

// Q-2 reduce this array to a unique set one
// let arr = [10,20,10,20,30,30,40,40,50,50,10,60]

// let x= arr.reduce((uniquearr,item)=>{

//     console.log(uniquearr)
//     if(!uniquearr.includes(item)){
//         // return[...uniquearr,item]       
//         uniquearr.push(item)
//     }
//     return uniquearr
// },[])

// console.log(x)



// Q-3
let person = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 },
    { name: 'Dave', age: 30 },
    { name: 'Dave', age: 30 },
    { name: 'Eve', age: 25 }
  ];

//   Need final ans: combined by Age: 

// {
//     25: [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 25 }, { name: 'Eve', age: 25 }],
//     30: [{ name: 'Bob', age: 30 }, { name: 'Dave', age: 30 }, { name: 'Dave', age: 30 }]
// }
//Solution
// let x = person.reduce((groupBy,item)=>{
//   console.log(groupBy)
//   let key = item.age
//   if(!groupBy[key]){
//     groupBy[key]=[item]
//   }
//   else{
//     groupBy[key].push(item)
//   }
//   return groupBy
// },{})





let arr = ["apple","orange","apple","orange","pear","orange","apple","banana"]
// {
//   apple:3,
//   orange:3,
//   pear:1,
//   banana:1
// }

arr.reduce((counterObject,item)=>{
if(!counterObject[item]){
  counterObject[item] = 1
}
else{
  counterObject[item]++
}
return counterObject
},{})



// counterObject is getting replaced everytime not updated
let x = arr.reduce((counterObject,item)=>{
  if(!counterObject.has(item))
  {
    counterObject.set(item,1)
  }
  else{
    counterObject.set(item,counterObject.get(item)+1)
  }
  return counterObject
},new Map())

console.log(x)



let arr1 =[10,20,30,40,50]

arr1.reduce((sum,value,index)=>{
  console.log(sum,value)
  return sum+value;
},0)






// console.log(x)





// console.log(x)

// let y = [10,20,30]

// let z = y.push(40)

// console



