let arr = [10,20,30,40.5,"hello",true,false];

//console.log(arr)

//length of array
console.log(arr.length)

console.log(arr[0])
console.log(arr[4])
console.log(arr[4][4])

let str = arr[4]
console.log(str[4]);
console.log(arr[4][0]);

let n = arr[3]
console.log(n)

console.log(arr, typeof arr)
console.log(arr[4], typeof arr[4])


for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}

for(let t of arr){
    console.log(t)
}
for(let x in arr){
    console.log(x)
}

arr[0]=100
console.log(arr)
//arrays are mutable