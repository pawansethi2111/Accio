//q1 any number of spaces could be between the words and at start and end of string
//let str = "   Ram     is dancing   on  the  floor"
//remove extra spaces

// let str = "   Ram     is dancing   on  the  floor"
// let ans = ""
// for(let t of str){
//     if(t!=" "){
//         ans = ans+ t
//     }
//     else if(t==" " && ans!=""){
//         console.log(ans)
//         ans = ""
//     }
// }
// console.log(ans)


//q2:
//print each word in reverse

//let str = "Ram is dancing"
//maR si gnicnad

let str =  "Ram is dancing"

str = str+" "
let word = ""
for(let t of str){
if(t!=" "){
    word = t+ word
}
else if(t==" " && word!="")
{
        console.log(word)
        word = ""
}
}




//q3:

//let str = "mohan prakash Sharma"
//M.P.Sharma


//q4: 
//let str = "Ram is dancing on the floor"
//even words , odd words
//print only those words in odd even pair which is greater
//is
//on
//the

//q5:
