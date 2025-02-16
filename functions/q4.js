//take a number  =>  1234
//s1 Take a number n => 8093 => sum of digits(8+0+9+3) = 20
//s2 : n + rev(n) => 8093 + 3908  = 12001 => sum of digits(1+2+0+0+1)
//s3: 120001 + 100021  = 220022 => 8

// step 1: n+ rev(n) => 8093 + 3908  = 12001
// sum of digits => 1+2+3+4 =>10
// step 2: n+step1 => 1234+10 => 1244
// step 3: products of

//step 4
//let n = 756
//s1: 756 => 7+5+6 =18

//s2: 756 + 657 = 1413 =>1+4+1+3 = 9
//s3 => 1413 + 3141 = 4554 => 4+5+5+4 = 18
//final ans =>18+9+18 = 45


// let num = n
// let rev = 0
// let sum1 =0
// while(n){
// let rem = n%10
// sum1 = sum1+rem
// rev = rev*10+ rem
// n = parseInt(n/10)
// }
// console.log(rev)
// console.log(sum1)

// let n2  = num+rev
// console.log(n2)
// let num2 = n2
// let rev2 = 0
// let sum2 = 0
// while(n2){
//     let rem2 = n2%10
//     sum2 = sum2+rem2
//     rev2 = rev*10+ rem2
//     n2 = parseInt(n2/10)
// }

// console.log(rev2)
// console.log(sum2)

//use function

//let n = 756

function sumOfDigits(n){
    let sum =0
    while(n>0)
    {
        let last = n%10
        sum = sum+last
        n = parseInt(n/10)
    }
    //console.log(sum)
    return sum
}

function reverseNumber(n)
{
    let rev = 0
    while(n>0){
        let last= n%10
        rev = rev*10+last
        n = parseInt(n/10)
    }
    return rev
}

let n = 756
let s1 = sumOfDigits(n)
console.log("s1",s1)

let s2Number = n+reverseNumber(n)
let s2 = sumOfDigits(s2Number)
let s3Number = s2Number + reverseNumber(s2Number)
let s3 = sumOfDigits(s3Number)
console.log("s3.Number",s3Number)
console.log("s3",s3)
console.log("final ans", s1+s2+s3)



//q5.js

//let n=5,r=2
//let ans = n!/(r! * (n-r)!)

