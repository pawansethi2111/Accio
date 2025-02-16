//given an array check if it has only unique elements or not 

let arr = [10,20,30,40,50]

console.log(arr.length)

let s = new Set(arr);

console.log(s.size)

if(arr.length== s.size){
    console.log('No duplicates')
}
else{
    console.log('duplicates')
}
