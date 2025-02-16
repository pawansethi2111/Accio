function f(n){
    if(n == 0){
      return 0
    }      
      f(n-1)
      console.log(n)
  }
  f(3)