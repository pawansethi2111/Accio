

// let obj = {
//     a: 10 ,
//     b : () =>{console.log("Hello")}
// }

// obj.b(); // Hello


// arr.slice()


// parseInt()



// let obj = {
//     a: 10 ,
//     b: 20,
//     c: 30
// }


// // get all the keys of object: 

// console.log(Object.keys(obj)); // [ 'a', 'b', 'c' ]

// console.log(Object.values(obj)); // [ 10, 20, 30 ]

// console.log(Object.entries(obj)); // [ [ 'a', 10 ], [ 'b', 20 ], [ 'c', 30 ] ]



// let user = {
//     name: "John",
//     email: "a@b.com",
//     panNumber: "1234567890",
// }

// // user.panNumber = "1234567890";


// // lets freeze the the object: 

// Object.freeze(user); // read only object

// // user.name = "Rahul";

// // delete user.name;

// user.age = 30;

// console.log(user);




// let obj = {
//     name: "John",
//     email : "a@b.com", 
// }

// Object.defineProperties(obj, {
//     pan: {
//         value: "1234567890",
//         writable: false, // can't change the value
//         enumerable: true,
//         configurable: false
//     },
//     // age: {
//     //     value: 30,
//     //     writable: true,
//     //     enumerable: true,
//     //     configurable: true
//     // }
// })

// delete obj.pan;

// delete obj.name;

// console.log(obj);


// obj.pan = "67886";

// for(let t in obj){
//     console.log(t);
// }

// console.log(Object.keys(obj));  

// console.log(Object.values(obj));

// console.log(Object.entries(obj));

// console.log(obj); 




// let obj1 = {
//     a: 10,
//     b: 20,
//     c: 30
// }

// Object.seal(obj1); // can't add or delete the property

// obj1.a = 100;

// console.log(obj1);



let person = {
    name: "Alice",
    age: 25,
    city: "New York"
};

Object.defineProperties(person, {
    name: {
        value: person.name,
        writable: true,
        enumerable: true,
        configurable: true
    },
    age: {
        value: person.age,
        writable: true,
        enumerable: false,
        configurable: true
    },
    city: {
        value: person.city,
        writable: true,
        enumerable: false,
        configurable: true
    }
});


// for (let key in person) {
//     console.log(key); 
// }


// console.log(Object.getOwnPropertyNames(person)); // [ 'name', 'age', 'city' ]

let obj = {
    a:10,
    b:20,
    c:{
        d:30,
        e:40
    }
}

Object.freeze(obj);

obj.a = 100;
obj.c.d = 100;
console.log(obj);