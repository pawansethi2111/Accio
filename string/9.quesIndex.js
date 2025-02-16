// ***********************************************************************************************************
//let str = "AbhiOo"
//print all vowels,using index Of

// let str  = "AbhiOo"
// let vowels = "aeiouAEIOU"

// for(let t of str){
//    if(vowels.indexOf(t)>=0)
//    {
//     console.log(t)
//    }
// }

let str = "tyymamadmadmadmad"
//remove all duplicate values //mad
let newstr = ""     
for(let i = 0;i<str.length;i++){    
    if(newstr.indexOf(str[i])==-1)
    {
        newstr = newstr+str[i]
    }
}       
console.log(newstr)

let newStr = ""
for(let q of str)
{
if(newStr.indexOf(q)==-1){
    newStr = newStr + q    
}
}

console.log(newStr)