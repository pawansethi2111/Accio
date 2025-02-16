// Replace every character by its next charcater in alphabet



// Z => A
// z => a
// 9 => 0

// let str = "Ra9mZshz"
// let s1 = ""
// for(let t of str){
//     // console.log(t+1)
//     let code = t.charCodeAt(0) // 90
//     code = code + 1 // 83
//     if(code == 91){
//         code = 65
//     }
//     else if(code == 123){
//         code = 97
//     }
//     else if(code == 58){
//         code = 48
//     }


//     let nextChar = String.fromCharCode(code)
//     s1 = s1 + nextChar
// }


// console.log(s1) // Sb0nftia




let st = "Ra9mZshz"
let s = ""
for(let t of st)
{
    let code = t.charCodeAt(0)
    code=code+1
    if(code==91){
        code = 65
    }
    else if(code==123)
        code = 97
    else if(code ==58)
        code = 48

    let nextChar = String.fromCharCode(code)
    s = s+nextChar
}

console.log(s)