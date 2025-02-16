// let arr =["apple","banana","cherry"]

// let brr = arr

// brr[0] = "papaya"

// let crr = brr

// crr[1] = "kiwi"

// console.log("arr:",arr)

let arr =["apple","banana","cherry"]

//let brr = arr //shallow copy

// let brr  = []

// for(let i=0;i<arr.length;i++)
// {
//     arr[i] = brr[i]
// }


// let brr = [...arr] //deep copy => 100% true nahi hat

// arr[0] ="papaya"

// console.log("brr:", brr)

//nested array:

let arr = ["apple","banana", "cherry",["mango","orange","grapes"],"kiwi"]

for(let i=0;i<=arr.length;i++)
{
    console.log(i, arr[i])
}

// let k = arr[3]

// console.log(k[1])

console.log(arr[3][1])

