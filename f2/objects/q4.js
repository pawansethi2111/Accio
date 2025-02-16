
let cart = {
    owner: "Abhishek",
    items: [
        { name: "Laptop", price: 50000, quantity: 5 },
        { name: "Mouse", price: 500, quantity: 0 },
        { name: "USB", price: 300, quantity: 0 },
        { name: "Keyboard", price: 1000, quantity: 2 },
        { name: "Monitor", price: 10000, quantity: 10},       
    ]
};

// for in loop is for Object
// for op loop is for Array

// let arr = cart.items
// let sum=0
// for(let t of arr)
// {
//     sum = sum+t.price*t.quantity
// }

// console.log(sum)



//Q
// remove items that have quantity 0


// let deletedIndex = [] //1,2

// let arr= cart.items;
// for(let i=0;i<=arr.length-1;i++){
// if(arr[i].quantity===0){
//     arr.splice(i,1)//1
//     i--//0
// }
// }

// console.log(cart)

// let arr = [10,20,30,40,50]
// let l = arr.length
// for(i = 0; i<=l-1; i++){
//     arr.pop()
//     // i = 0,  4
//     // i = 1, 3
//     // i = 2, 2
//     // i = 3, 1
// }

// console.log(arr)



// let obj = {
//     name:'abhi',
//     age:23,
//     favourite:['apple','banana','mango'],
// }

// let arr = obj.favourite //['apple','banana','mango']

// arr.pop()