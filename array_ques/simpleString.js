let removedCharcater = A[0]//a
A = A.slice(1) // ca

if(A.length == 0){
    return "A"
}

while(true){
    // console.log(A,B,C)
    if(removedCharcater == "a"){
          removedCharcater = A[0] // c
          A = A.slice(1) // "a"
        if(A.length == 0){
            return "A"
        }
    }

    else if(removedCharcater == "b"){
        removedCharcater = B[0]
        B = B.slice(1)
        if(B.length == 0){
            return "B"
        }
    }

    else if(removedCharcater == "c"){
        removedCharcater = C[0] // a
        C = C.slice(1) // ""
        if(C.length == 0){
            return "C"
        }
    }
}