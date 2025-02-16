let mat = [
    [10,20,30],
    [40,50,60],
    [70,80,90]
]

//transpose the matrix

//[
// [10,40,70],
// [20,50,80],
// [30,60,90]
//]

let tarMatrix = []

for(let i=0;i<=mat.length-1;i++)
{
    let arr = []    
    for(let j=0;j<=mat[i].length;j++)
    {
        arr.push(mat[j][i])        
    }
    tarMatrix.push(arr)   
}

console.log(tarMatrix)
