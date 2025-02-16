import axios from 'axios';

// function makeaRequest1()
// {   
//     console.log("A")
//     axios.get('https://jsonplaceholder.typicode.com/posts')
//     .then((response) => {
//         console.log("C");
//         //console.log(response.data);
//     })
//     .catch((error) => {
//         console.log(error);
//     });
//     console.log("B");
    
// }

console.log("Before function call")
async function makeaRequest2(){
console.log("A")

let ans  = await axios.get('https://jsonplaceholder.typicode.com/posts')

console.log("A")
try{
let response = await axios.get('https://jsonplaceholder.typicode.com/posts')
console.log(response.data)

console.log("B")
}

catch(error){
    console.log(error)
}
// .then(response => {
//     console.log("C");
//     })
//     .catch(error => {
//         console.log(error);
//     });
      
    // return response.data;   

}
makeaRequest2()

console.log("After function call")