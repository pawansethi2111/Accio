let arr =  ["apple","banana","cherry",["mango","orange","grapes"],"kiwi"]

let brr = [...arr]

//[]

for(let i=0;i<=arr.length-1;i++)
{
 //   console.log(arr[i], typeof arr[i])
    if(typeof(arr[i])=="object")
    {
    //arr[i] = ["mango","orange","grapes"]
    // let k = arr[i]
    // let crr = []    
    // for(let j=0;j<=k.length-1;j++){
    //     crr[j] = k[j]
    // }
    // brr[i] = crr
    brr[i] = [...arr[i]]
    }

 else if(typeof(arr[i])!="object"){
    brr[i]= arr[i]
 }
}


arr[3][1] = "papaya"

console.log("arr:",arr)
console.log("brr:",brr)


//make a dangerous looking nested of nested of nested arrays as example

// let arr = ["apple","banana","cherry",["mango",["orange"]]]


//structural clone
//kitna bhi nested ho it will copy from one to another
 
let arr = [10,20,[30,40,50,[60,70,80],[90,100,110]]]

brr = structuredClone(arr)

console.log("arr:",arr)

console.log("brr:",brr)