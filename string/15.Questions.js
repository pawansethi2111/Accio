let str = "Ram is dancing on the floor"

//Ram
//is 
//dancing

let word = ""

for(let t of str){
    if(t!=" ")
    {
        word = word+t
    }
    else{
        console.log(word)
        word = ""
    }
}

console.log(word)