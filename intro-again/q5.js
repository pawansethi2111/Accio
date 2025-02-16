let n = 79
//reverse => 97
// let ans=0
// while(n>0){
//     let rem = n%10
//     ans = ans*10+rem
//     n = n/10
// }
// console.log(ans);
// let last = n%10 //9
// let first = parseInt(n/10)//7
// let num = last*10 + first
// console.log(num)
// console.log(last,first)


//Take a number and check if number is even or odd
//if its even check if divisible by 4 or not
//if it is odd then check if divisble by 3 or not

let n2 = 56
if(n2%2==0){
    console.log("Even")
    if(n2%4==0){
        console.log("Divisible by 4")
    }
    else{
        console.log("Not divisible by 4")
    }
}
else{
    console.log("Odd")
    if(n%3==0){
        console.log("Divisble by 3")
    }
    else{
        console.log("Not divisible by")
    }
}