//q1:  from 1-20 print all numbers div by 3 
//q2:  take a number n,print all numbers from 1 - n/2 which divdes n completely
//q3:  take a number ,60, find all factors of that number 

//q4:  take a number and check if it is prime or not
//q5:  find predict of all numbers 1-10
//q6:  take a number and print its multiplication table

for(let i=1;i<=20;i++){
    if(i%3==0){
        console.log(i)
    }
}
let n = 60
for(let i=1;i<n/2;i++)
{
    if(n%i==0)
    {
        console.log(i)
    }
}
for(let i=1;i<=parseInt(n/2);i++){
    if(n%i==0){
        console.log(i)
    }
}


let num = 60
for(let i=1;i<=60;i++){
    if(n%i==0){
        console.log(i)
    }
}

let number = 100

for(let i=2;i<100;i++){
    if(number%i==0)
    {
        console.log(i);
    }
}

let count=0
for(let i=1;i<=n;i++)
{
    if(n%i==0)
    {
        count = count+1
    }
}
console.log(count)

let sum=0
for(let i=1;i<=20;i++){
    sum = sum+i
}
let prod = 1
for(let i=1;i<=10;i++)
{
    prod = prod*i
}
console.log(sum)
console.log(prod)

//2*1=2
//2*2=4
//2*3=6

let nn = 5
for(let i=1;i<=10;i++)
{
    console.log(nn,"x",i,"=",nn*i);
}

//562
let a = 500 
let b = 600


// 562
for(let i = a; i<=b; i++){
   let lastTwoDigit = i%100 // 62
   let secondLast = parseInt(lastTwoDigit/10) // 6.2

   if(i%2==0 && secondLast == 4){
    console.log(i)
    prod = prod * i
}
}

console.log("product",prod)

let prody = 1
for(let i = a; i<=b; i++){
   let lastTwoDigit = i%100 // 62
   let secondLast = parseInt(lastTwoDigit/10) // 6.2

   if(i%2==0 && secondLast == 4){
       console.log(i)
        prody = prody * i
      flag = true
   }
   
}

// console.log("product",prod)

if(flag == false){
   console.log(0)
}
else{
    console.log(prod)
}