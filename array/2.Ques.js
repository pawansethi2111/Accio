//Take an array and print only positive numbers

//find sum of all elements in array

//take two arrays and find sum of corresponding elements of array

// let arr = [10,-20,30,-40.5,60]

// for(let t of arr){
// if(t>0)
// {
//     console.log(t)
// }
// }

// for(let i=0;i<arr.length;i++){
//     if(arr[i]>0)
//     {
//         console.log(arr[i])
//     }
// }



// let arr = [10,20,30,40,50,60];
// let sum=0
// for(let i=0;i<arr.length;i++)
//     {
//         sum = sum+arr[i]
//     }
    
//     console.log(sum)


    let arr3=[]
    let arr1 = [10,20,30,40,50,60] ;
    let arr2 = [100,200,300,400,500,600];
    arr3[0] = 100
    arr3[1] = 220
    console.log(arr3[0])
    console.log(arr3)
    //arr1[0] = arr1[0]+arr2[0]
    console.log(arr1)

    for(let i = 0;i<Math.max(arr1.length,arr2.length);i++)
{    
        console.log(arr1[i],arr2[i],arr1[i]+arr2[i])
}    
//[110,220,330,440,550,660]

for(let i = 0;i<Math.max(arr1.length,arr2.length);i++)
    {    
            arr3[i] = arr1[i]+ arr2[i]
    }
console.log(arr3)

