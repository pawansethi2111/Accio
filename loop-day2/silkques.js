//let input = userInput 
let n = 20200//parseInt(input[0]) // 0

if(n==0){
    console.log("0")
}
else{
num =n
let rev=0
let rem = 0
while(n)
{
  rem = n%10
  rev = rev*10+rem
  n = parseInt(n/10)
}

let count = 0
while(rev){
rem = rev%10
if(rem%2==0){
count= count+1
console.log(rem," ")
}
rev=parseInt(rev/10)
}
if(count==0 && num%10!=0)
{
  console.log("-1")
}
// else if(num%10==0)
// {
//     console.log(0)
// }

let countzero = 0
while(num%10==0){
countzero = countzero+1
num = num/10
}
//console.log(countzero)

while(countzero--){
console.log("0")
}

// let remainder = 0
// let reverse = 0
// console.log(num)
// while(num){
// remainder  = num%10
// if(remainder%2==0)
// console.log(remainder)
// num = parseInt(num/10)
// }

}