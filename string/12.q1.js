// Replace every character by its next charcater in alphabet
let str = "Ramesh"



for(let t of str){
    // console.log(t+1)
    let code = t.charCodeAt(0) // 82
    code = code + 1 // 83
    console.log(String.fromCharCode(code))
}