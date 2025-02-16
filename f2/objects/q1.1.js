// check if a key is present in an object or not

let obj = {
    "name": 'abhi',
    "age": "fhjhhjg",
    "city": 'bangalore',
    "hello world": 'hello'
}
// check if the key "age" is present in the object or not
// console.log(obj.age)
if(obj.age==undefined){
    console.log("key is not present")
}
else{
console.log("key is present")
}
console.log("z" in obj) // false\
console.log("age" in obj? "key is present" : "key is not present")