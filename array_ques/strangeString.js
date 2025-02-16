// let s1 =""
// let k
// for(let i=1;i<=n;i++){
//   k=i
//   if(i>26){
//      k= i%26 //0-25
//   }
//   if(k==0){
//     k = 26
//   }
//   let v = k+96  
//   let ch = String.fromCharCode(v)
//   if(i%2==0){
//     s1 = s1+ ch
//   }
//   else{
//     s1 = ch + s1
//   }
// }
// return s1


let str = "abcdefghijklmnopqrstuvwxyz"
let track = 0
let s1 = ""
let n = 10
// function modifyString(n)
for(let i=1;i<=n;i++)
{
    if(i%2==0)
    {
        s1 = s1+str[track]
    }
    else
    {
        s1 = str[track]+s1
    }
    track = track+1
    if(track==26)
    {
        track=0
    }
}

return(s1)