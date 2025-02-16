import axios from "axios";

async function apiCall(link)
{
    try
    {
         let response= axios.get(link)
         return response.data
    }
    catch(err){
        console.log(err.response.data)
    }
}

let a1 = await apiCall("abc.com/api/getProduct1")
let a2 = await apiCall("abc.com/api/getProduct2")

let a3 = a2.products

let arr  = a1.concat(a3) //it is for arrays

arr.sort((a,b)=>{
    if(a>b)
    {
        return 1
    }
    else
    {
        return -1
    }
})

let newArray = []
for(let t of arr){
    if(t.price.startsWith("$") || t.price.endsWith("USD")){
        newArray.push(t)
    }
    else{
        let price = t.price.trim().slice(0,-3)
        price = price*(1/0.88)
        let obj = {...t,price:price}
        newArray.push(obj)
    }
}


// let obj1={
//     a:10,
//     b:20
// }

// let obj2={
//     c:30,
//     d:40
// }

// Object.assign(obj1,obj2)

// console.log(obj1)