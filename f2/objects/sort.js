// let arr= ["manish","abhi","rahul","suresh","ramesh"]

// //arr.sort()

// //console.log(arr) //["abhi","manish","rahul","ramesh","suresh"]

// let arr = [1,2,10]

// //["1","10","2"]
// arr.sort(customFunction)


// // function customFunction(a,b){
// //     return a-b
// // }

// arr.sort(function(a,b){
//     return a-b
// })

// console.log(arr)
// console.log("ramesh">"rakesh")

// console.log(arr)

// let items= =[
//     {name:"Banana", price:50},
//     {name:"Apple",price:20},
//     {name:"Orange", price:30}
// ];
// items.sort(function(a,b)
// {
//     return a.price-b.price
// })
// console.log(items)


let employees = [
    { name: "Hannah", department: "Finance" },
    { name: "Sarah", department: "IT" },
    { name: "Zryan", department: "Finance" },
    { name: "Mike", department: "IT" },
    { name: "Yshley", department: "Finance" },
    { name: "Jeff", department: "IT" }
  ];
employees.sort(function(a,b){return a.department.localeCompare(b.department)})


console.log(employees);

  //   employees.sort(function(a,b){

//     if(a.department>b.department){
//         return 1
//     }
//     else if(a.department<b.department){
//         return -1
//     }
//   })

//   console.log(employees)

// let str = "ramesh"
// let str2 = "rakesh"

// console.log(str.localeCompare(str2))


//ascending based on department, if department is same then sort based on name in descending order

// employees.sort(function(a,b)
// {
//     if(a.department>b.department){
//         return 1
//     }
//     else if(a.department<b.department){
//         return -1
//     }
// })

// console.log(employees)



let arr = [
    {marks: 10 , details: {name: "abhi", age: 23, subject: "maths"}},
    {marks: 20 , details: {name: "rahul", age: 15, subject: "science"}},
    {marks: 30 , details: {name: "rohit", age: 20, subject: "maths"}},
    {marks: 40 , details: {name: "sachin", age: 17, subject: "science"}},
    {marks: 3 , details: {name: "sachin", age: 17, subject: "sst"}},
    {marks: 11 , details: {name: "sachin", age: 17, subject: "maths"}}
]

//sort based on subject (des), if sub same based on marks ascending:

arr.sort(function(a,b){
    if(a.details.subject > b.details.subject){
       return -1
    }
    else if(a.details.subject < b.details.subject){
        return 1
    }

     if(a.marks >b.marks){
          return 1
     }
     else{
            return -1
     }

}

)

console.log(arr)