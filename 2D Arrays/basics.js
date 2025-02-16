//Nested arrays Special case:
// let arr = [10,20,30,[40,50,60],70,80,90,100]

//2d Arrays or matrix:

// let m =[
//     [1,2,3,200],
//     [4,5,6,100],
//     [7,8,9,300]
// ]


let mat = [
    [10,20,30],
    [40,50,60],
    [70,80,90]
]

// console.log(mat[0])
// // for()
// console.log(mat[0][1])


for(let i=0;i<=mat.length-1;i++)
{
    // console.log(mat[i])
    // let arr= mat[i]
    for(let j=0;j<=mat[i].length-1;j++)
    {
        console.log(mat[i][j])
    }
}

