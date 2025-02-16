//let n = 279683
// while(n){
//     let rem = n%10
//    // console.log(rem)
//     if(rem%2==0){
//         console.log(rem)
//     }
//     n = parseInt(n/10)
// }

//print prime numbers

let n = 279683
while(n)
{
    let rem = n%10
    let count=0
    for(let i=2;i<=Math.pow(rem,0.5);i++){
        if(rem%i==0){
            count++
        }
    }
    if(count==0){
        console.log(rem)
    }
    n = parseInt(n/10)
}
