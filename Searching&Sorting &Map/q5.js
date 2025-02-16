// method1:
// let a1 = [10,20,30,40,50]
// let a2 = [30,40,50,60,70]

// let s2 = new Set(a2)
// let intersection = []
// for(let t of a1)
//     {
//     if(s2.has(t))
//     {
       
//     }
//     else
//     {
//         intersection.push(t)
//     }
// }
// //console.log(intersection);


// let s1 = new Set(a1)
// let intersection2 = []
// for(let t of a2){
//     if(s1.has(t)){
       
//     }
//     else{
//         intersection2.push(t)
//     }
// }
// //console.log(intersection2);

// let arrr = []
// for(let t of intersection){
// arrr.push(t);
// }
// for(let t of intersection2){
//     arrr.push(t)
// }
// console.log(arrr)
// *************************************************************************************

let a1 = [10,20,30,40,50]
let a2 = [30,40,50,60,70]


function findNotCommon(x,y)
{
    
    let s2 = new Set(y)
    let arr = []
    for(let t of x)
        {
        if(s2.has(t)==false){
            arr.push(t)
        }
    }
    return arr
}


let b1 = findNotCommon(a1,a2)
let b2 = findNotCommon(a2,a1)

// console.log(b1,b2)

console.log([...b1,...b2])