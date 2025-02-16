// let arr = [10,7,5,8,11,9]


// let x = 16


// for(let i = 0; i<=arr.length-1; i++ ){

//     for(let j = i+1; j<=arr.length-1; j++){

//         if(arr[i]+arr[j] == 16){
//             console.log(arr[i], arr[j])
//         }

//     }

// }

// for(let i = 0; i<=arr.length-1; i++ ){

    

//         if(arr[i]+arr[i+1] == 16){
//             console.log(arr[i], arr[j])
//         }

  

// }


let arr = [10,7,5,8,11,9]

let x = 16 


let flag = false
for(let t of arr){
    let firstNumber = t
    let secondNumber = x - firstNumber  //a

    let found = searching(arr, secondNumber,firstNumber,i)
    if(found)
    {
        console.log(firstNumber, secondNumber)
        flag = true
    }    
}

if(flag == false){
    console.log("Pair not found")
}




function searching(arr, p,firstNumber, indexOfFirstNumber){
    for(let i=0;i<=arr.length-1;i++){
        let t = arr[i]
        if(t == p && firstNumber!=p){
            return true
        }
        else if(t == p && firstNumber==p)
        {
            let indexOfT = i
            if(indexOfT!=indexOfFirstNumber){
                return true;
            }
            continue
        }
    }
    return false
}



// a+b = 16 => b = 16-a

// a, 16-a