
let arr = [3,9,8,7,10,20,9,7,7]

// find pairs whose sum is 16

//x, 16-x

// let m = new Map()

// for(let t of arr)
// {

//     if(m.has(16-t)){
//         console.log(t,16-t)
//     }
//     m.set(t,1)
// }
//*************************************Sirs code */

let givenSum = 16


//let s = new Set(arr)
//for(let t of arr)
    // {
    //     let first = t            //9
    //     let second = givenSum-t  //8
    
    //     if(s.has(second) && first!=second)
    //     {
    //         console.log(first,second)
    //     }
    // }

let m = new Map()

for(let t of arr) {
    if(m.has(t)){
        let v = m.get(t)
        m.set(t,v+1)
    }
    else{
        m.set(t,1)
    }
}

console.log(m)

for(let t of arr)
{
    let first = t
    let second = givenSum-t
    if(m.get(second)>0 && first!=second && m.get(first)>0)
    {
        console.log(first,second)
        map.set(first,map.get(first)-1)
        map.set(second,m.get(second)-1)
        console.log(m)
        break
    }
    else if(first==second && m.get(first)>=2)
    {
        console.log(first,second)
        m.set(first,m.get(first)-1)
        m.set(second,m.get(second)-1)
    }
}