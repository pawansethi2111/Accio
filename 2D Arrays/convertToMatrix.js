// let arr = [10,20,30,40,50,60,70,80,90]
//3*3
// let mat=[]
/*
[
    [10,20,30],
    [40,50,60],
    [70,80,90]
]

*/

// let count=0

// let row = []
// for(let i=0;i<=arr.length-1;i++)
// {
//     row[count++] = arr[i]
//     //[10,20,30]
//     if(count==3){
//         count=0
//         mat.push(row)
//         row = []
//     }
// }
// console.log(mat)



let mat  = [
    [10,20,30],
    [40,50,60],
    [70,80,90]
]

//flattening of matrix

let arr = mat.flat()
console.log(arr)