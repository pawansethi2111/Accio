//lets hit greet API:
// fetch("https://localhost:4000/greet")
// .then(response=>console.log(response.json())) // this also returns Promise //.json converts into javascript
// .then(data => console.log(data))


// .catch(err=>console.log(err))


fetch("https://localhost:4000/greet")
// .then(response=>console.log(typeof(response.body))) // this also returns Promise //.json converts into javascript
// .then(data => console.log(data))
.then(response=>console.log(response.text()))
.then(data=>{
    console.log(JSON.parse(data))
    console.log(typeof(data))
})

.catch(err=>console.log(err))


// let obj = {
//     name:"John",
//     age:30,
//     city:"New York"
// }

// let jsonData = JSON.stringify(obj);

// JSON.parse("json");
// this operation is async

let data = {
    num1:10,
    num2:20
}

fetch("https://localhost:4000/sum",{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({num1:10,num2:20})
})
.then(response=>response.json())
.then(data=>console.log(data))
.catch(err=>console.log(err))

let form  = document.getElementById("sumForm");

let num1_box = document.getElementById("num1");

let num2_box = document.getElementById("num2");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let num1 = num1_box.value;
    let num2= num2_box.value;

    fetch("https://localhost:4000/sum",{
        method:"POST",
        headers:{
            "Content-Type":"application.json"
        },
        body:JSON.stringify({num1:v1,num2:v2})
    })
    .then(response=>response.json())
    .then(data=>{
        console.log(data)
        para.innerHTML = data.sum;
    })
    .catch(err=>console.log(err))
})