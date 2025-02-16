
let str = "abcdeadadcc"
//first non repeating character //b
// Below Code is correct
// let m = new Map()

// for(let t of str)
// {
//     if(m.has(t))
//     {
//         let v = m.get(t)
//         m.set(t,v+1);
//     }
//     else
//     {
//         m.set(t,1)
//     }
// }

// for(let t of str){
//      if(m.get(t)==1){
//         console.log(t)
//         break
//     }
// }


//**********************************************************************Sir's code */


let map = new Map()

for(let t of str)
{
    if(map.has(t)){
        let v = map.get(t)
        map.set(t,v+1)
    }
    else{
        map.set(t,1)
    }
}

console.log(map)

for(let t of map)
{   
    console.log(t)
    if(t[1]==1)
    {
        console.log(t[0])
        break
    }
}

