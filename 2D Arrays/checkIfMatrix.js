
// let mat = [
//     [10,20,30,40],
//     [50,60,70,80],
//     [90,100,110,120]
// ]

// let l = mat[0].length
// let flag = true
// for(let i=1;i<=mat.length-1;i++){   
//     if(l!=mat[i].length)
//     {
//         console.log("Not a matrix")
//         flag = false
//         break
//     }
// }

// if(flag==true){
//     console.log("Matrix")
//}


let mat = [
[10],
20,
[30,40],
[50,60],
[70,80],
90
]


if(Array.isArray(mat[0])==true)
{
let l = mat[0].length
let flag = true
for(let i=1;i<=mat.length-1;i++)
{
    if(Array.isArray(mat[i])==true && mat[i].length!=l)
    {
        console.log("Not a matrix")
        flag = false
        break
    }
}
if(flag==true)
{
    console.log("Matrix")
}
}