let arr = [10,20,30,40,50,60]

let x = 90

let flag = false

for(let t of arr){

    if(t==x){
        console.log("Element found")
        flag = true
    }
}

if(flag == false){
    console.log("Element not found")    
}

//time complexity n