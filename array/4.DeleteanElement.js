// let arr = [10,20,30,40,50,60,70,80,90,100]
// let index = 3
// let arr1 = []
// for(let i=0;i<=index;i++){
//     arr1.push(arr[i])    
// }

// arr1.pop()
// console.log(arr1)

// for(let i = index+1;i<arr.length;i++){
//     arr1.push(arr[i])
// }

// console.log(arr1)

// for(let i=0;i<arr.length;i++){
// if(i!=index){
//     arr1.push(arr[i])
// }
// }
// console.log(arr1)

//shift and unshift
//is at beginning both

//push pop work at the end

// let arr = [10,20,30,40,50]
// //let x = arr.shift()
// let x = arr.unshift(60,70,80,90,100)
// //x will denote the size of the array

// console.log(arr,arr.length)
// console.log(x)

// //push and pop
// //shift and unshift

// let arr = [10,20,30,40,50,60]
// let index =1
//delete 20
//10,20,30,40,50,60
//10,30,30,40,50,60
//10,30,40,40,50,60
//10,30,40,50,60,60


// for(let i = index+1;i<arr.length;i++)
// {
//     arr[i-1] = arr[i]
// }
// arr.pop()
// for(let i = 0;i<arr.length;i++){
//     console.log(arr[i])
// }

// console.log(arr)

let arr  = [10,20,30,40,50,60]
let index  = 2
let n = 25
//arr = [10,20,25,30,40,50,60]

//10,20, 30,40,50,60,undefined
//10,20,30,30,50,60,60
//10,20,30,40,50,50,60
//10,20,30,40,40,50,60
//10,20,30,30,40,50,60
//10,20,25,30,40,50,60


//wrong loop
// let t = arr.length
// for(let i = index;i<arr.length;i++){
//     arr[i+1] = arr[i] 
//     console.log(arr)
// }
// arr[index] = n
// console.log(arr)



//correct loop
// for(let i = arr.length-1;i>=index;i--){
//     arr[i+1] = arr[i]
//   //  console.log(arr)
// }
// arr[index] = n
// console.log(arr)


// for(let i  = index;i<=arr.length-1;i++){
//     arr[i] = arr[i+1]
//     console.log(arr)
// }



















