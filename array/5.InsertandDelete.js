
// let arr = [10,20,30,40,50]


// delete arr[1]


// console.log(arr, arr.length)


// add or remove elements from the end of array
// push() and pop()


// let x = arr.pop() // remove last element [10,20,30,40]
// let y = arr.pop() // remove last element [10,20,30]


// let x = arr.push(60,70,80,90,100) // add element at the end [10,20,30,40,50,60]

// console.log(arr, arr.length)
// console.log(x)
// console.log(x, y)



// shift and unshift => start


// let arr = [10,20,30,40,50]


// // let x = arr.shift()

// let x = arr.unshift(60)
// // arr.unshift(70)
// arr.unshift(60,70,80)
// // [60,70,80,10,20,30,40,50]


// console.log(arr, arr.length)
// console.log(x)



// let arr = [ 10,20,30,40,50,60]

// let index = 1


// for(let i = index; i<=arr.length-2; i++){
//     arr[i] = arr[i+1]
//     // console.log(arr)
// }

// arr.pop()

// console.log(arr)

// 10, 20, 30, 40, 50, 60

// 10,30,30,40,50,60

// 10,30,40,40,50,60

// 10,30,40,50,50,60

// 10,30,40,50,60,60



let arr = [10,20,30,40,50,60]

let index = 2 
let n = 25


// 10,20,30,40,50,60, undefined
// 10,20,30,40,50,60,60
// 10,20,30,40,50,50,60
// 10,20,30,40,40,50,60
// 10,20,30,30,40,50,60
// 10,20,25,30,40,50,60

for(let i = arr.length-1; i>=index; i--){
   arr[i+1] = arr[i]
//    console.log(arr)
}

arr[index] = n 

console.log(arr)

