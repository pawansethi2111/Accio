//q5.js
//let n=5,r=2
//let ans = n!/(r! * (n-r)!)



let n = 5,r=2
function fact(n){
    let fac = 1 
    for(let i = 1;i<=n;i++){
        fac  = fac*i
    }
    return fac
}

let ans = fact(n)/(fact(r)*fact(n-r))
console.log(ans)

