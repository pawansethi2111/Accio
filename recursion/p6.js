function f(n){

    if(n==0){
        return 0
    }

    f(n-1)
    console.log(n)
    f(n-1)
}

f(2)

//o/p : 1 2 1