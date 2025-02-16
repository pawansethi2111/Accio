let a = 10
let b = 4
let ans = a/b //2.5
console.log(ans)
//for integer part only
let ans2 = parseInt(ans)
console.log(ans2)
//for decimal part
let ans3 = parseFloat(ans)-parseInt(ans)
console.log(ans3)
//let a = 10
//let b = 20
let c = 15
if(a>b && a>c){
console.log("a is greater",a)
}
else if(b>a && b>c){
    console.log("b is greater",b)
}
else{
    console.log("c is greater",c)
}