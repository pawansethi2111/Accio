let professionalDetails = {
    "experience": 2,
    "role": "developer",
    "company": "TCS",
}

let medicalDetails = {
    "blood-group": "O+",
    "height": "5.8",
    "weight": "70",
}


// combine both objects into a single object called "personalDetails"

// let obj3 = {}

// for(let t in professionalDetails){
//     //t, professionalDetails[t]
//     obj3[t]  = professionalDetails[t]
//     // obj3["experience"] = 2
//     // obj3["role"] = "developer"
//     // obj3["company"]="TCS"
// }

// for(let t in medicalDetails){
//     // console.log(t,medicalDetails[t])
//     obj3[t]= medicalDetails[t]
// }
// console.log(obj3)


// let obj3= {...professionalDetails,...medicalDetails}

// console.log(obj3)


let obj = {
    name:"abhi",
    age:23,
    city:"bangalore",
}

let obj1= {...obj, city:"delhi"}

console.log(obj1)



let obj1 = {
    a:10,
    b:20,
    c:30
}

let obj2 ={
    d:40,
    e:50,
    f:60
}

let obj3 = {}
Object.assign(obj2,obj1)
console.log(obj2)

let arr = [10,20,30,40,50]
let arr2= [100,200]

Object.assign(arr2,arr1)
console.log(arr2)