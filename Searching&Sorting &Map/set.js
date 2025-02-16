
// let arr = [10,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

// //arr[10,20,30]

// let arr=[]
// let arr1 = new Array(10)

let set = new Set()

set.add(10)
set.add(20)
set.add(30)
set.add(40)

//set.add(10)

console.log(set)

//console.log(set.has(100)) //returns true //O(1)

// console.log(set.size)

// set.delete(10)

// set.clear()

// console.log(set)

// for(let t of set)
// {
//     console.log(t)
// }


// let arr = [10,20,10,20,10,20,20,10,20]
// let s = new Set()

// for(let t of arr)
// {
//     s.add(t)
// }
// console.log(s)

// // let arr1 = []
// // for(let t of s)
// // {
// //     arr1.push(t)
// // }


// let arr1 = [...s]

// console.log(arr1);


//let s = new Set(arr)
//console.log(s)
console.log([...s])

let str = "madmamdmamdmad"
let s = new Set(str)
console.log(s)

let arr = [...s]
console.log(arr.join(""))








