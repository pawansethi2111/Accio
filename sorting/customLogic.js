// let arr = [1,10,2]

// arr.sort() //[1,10,2]

// function hello(){
//     console.log("hello")
// }

//callback function

// let x = hello
// let y = hello()
// arr.sort(x)
// console.log(x) //undefined
// x()
// y()

// let arr1 = [10,20,30]

//arr1
//arr1[2]

// let arr = [1,10,2]
// arr.sort()
// arr.sort(a,b)
// function sort()
// {
//     console.log(a,b)
// }

let arr = [1,10,2]

arr.sort(customLogic)

// function sort(customLogic){
//     customLogic(a,b)
// }

function customLogic(a,b){
if(a<b){
    return -1
}
else if(a>b)
{
    return 1
}
}

console.log(arr)

// +ve number => exchange

//-ve number => no exchange

// 0 => no exchange