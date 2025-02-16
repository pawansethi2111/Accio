// Q1a:
let obj1 = {
    "full-name" : "Rahul",
    "age" : 20,
    "city" : "Delhi",
}

// change the name of the key "full-name" to "first-name"


// let value = obj1["full-name"]

// delete obj1["full-name"]

// obj["first-name"] = value

// console.log(obj1)

let newObj = {} //{ "full-name":'Rahul'}
for(let key in obj1)
{
    if(key==="full-name")
    {
        newObj["first-name"] = obj1[key];
    }
else
{
    newObj[key] = obj1[key];
}
}

console.log(newObj)




// let obj2  ={...obj1,"first-name":obj1["full-name"]}

// delete obj2["full-name"]

// console.log(obj2)