// let mat = [
//     [10,20,30],
//     [40,50,60],
//     [70,80,90]
// ]

let mat = [
    [10,20],
    [30,40],
    [50,60],
    [70,80]
]

// for(let i=0;i<=mat.length-1;i++){
//     for(let j=0;j<=mat[i].length-1;j++){
//         // console.log(mat[i][j])
//         // mat[0,0], m[1,0], m[2,0]
//         console.log(mat[j][i])        
//     }
//     console.log("######")
// }

// for(let i=0;i<=mat[0].length-1;i++)
// {
//     for(let j=0;j<=mat.length-1;j++)
//     {
//         console.log(mat[j][i])
//     }
//     console.log("######")
// }

let sum=0
for(let i=0;i<mat[0].length;i++)
{
    sum=0
    for(let j=0;j<mat.length;j++)
    {
        sum+=mat[j][i]
    }
    console.log(sum)
}