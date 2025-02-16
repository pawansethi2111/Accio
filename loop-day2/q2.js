//Q1: lets take a number and reverse it
//456 -> 654
//q2. check if a number is palindrome
//original number = reverse number
//121=>121

//take a number and print in normal order
//456 => 4,5,6


let n = 456
console.log(n)
let rev=0
let rem = 0
while(n)
{
    rem = n%10
    rev = rev*10+rem
    n = parseInt(n/10)
}
console.log(rev)


let num = 121
let remainder = 0
let reverse = 0
let number = num
while(num){
    remainder = num%10
    reverse = reverse*10+remainder
    num = parseInt(num/10)
}
if(reverse==number)
console.log("palindrome")
else
console.log("not palindrome")

let count = 0
while(rev){
rem = rev%10
if(rem%2==0){
count= count+1
console.log(rem," ")
}
rev=parseInt(rev/10)
}
if(count==0){
    console.log("-1")
}



//let input = userInput




