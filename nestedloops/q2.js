//50 - 60
//let m,n including m and n
//sum of factorial of all these numbers
//

let sum = 0
for(let i=50;i<=60;i++){
let fact = 1
for(let j = i;j>=1;j--){
    fact = fact*j
}
sum = sum+fact
console.log(fact)
}

console.log(sum)

