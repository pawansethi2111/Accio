let n = 79
let tensdigit = n/10
console.log(parseInt(tensdigit))
let last = n%10
let first = (n-last)/10
console.log(first)
//79 => 7*10+9
//423 => 4*100 + 2*10+3*1
//n  = first*10 + last
//(n-last)/10 = first
let a = 10
let b = 20
//sum of number is even or odd
//and also check
//product of number is div by 8 or not
let sum = a+b
if(sum%2==0)
{
    console.log("Even")
}
else
{
    console.log("Odd")
}
let prod = a*b
if(prod%8==0)
{
    console.log("Divisible")
}
else
{
    console.log("Not divisible")
}

