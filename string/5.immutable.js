let str = "RamResRh"
str[0] = "P"
console.log(str)
//string ko change nahi karskte but string assigned variable ko replace krke nai value daal sakte he
// str = "Pankaj"
// console.log(str)


console.log(str.replace("R","P"))//Pamesh

console.log(str) 


//replace/replaceAll

console.log(str.replace("R","P"))

//replace first matching characters

console.log(str.replaceAll("R","P"))

let str1 = "papa"
let newStr = ""
for(let t of str1)
{
    if(t=="p")
    {
        newStr = newStr+"k"
    }
    else if(t!="p")
    {
        newStr = newStr+t
    }
}
console.log(newStr)



let str2 = "koppa"
let newstr = ""
for(let t of str){

    if(t=="p"){
        newStr = newStr+"z"
    }
    else{
        newStr = newStr + t
    }
}

console.log(newstr)