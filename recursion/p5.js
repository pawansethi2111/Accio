function f(n){
    if(n==0)
    {
        return 0;
    }
    return n+f(n-1)
}
console.log(f(3))
 