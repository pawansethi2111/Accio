
//q2:
//print each word in reverse

let str = "Ram is dancing on the floor"
//maR si gnicnad

let newstr = ""
let word = ""
for(let t of str)
{
if(t!=" "){
    word = t+word//maR
}
else if(t==" "){
    console.log(word)
//    let reverseWord = ""
    // for(let i =word.length-1;i>=0;i--){
    //     console.log(reverseWord)
        newstr  = newstr+word+ " "
        word = ""
    }
}

console.log(newstr)