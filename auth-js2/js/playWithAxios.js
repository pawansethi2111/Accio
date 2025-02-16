import axios from 'axios'
// let url = "https://randomuser.me/api/"

// fetch("https://randomuser.me/api/")
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.log(error))

// axios.get("https://randomuser.me/api/")
// .then(response => console.log(response.data))
// .catch(error => console.log(error))


//post Api: 

// let obj = {
//     email: "a@b.com",
//     password: "123456"
// }

// fetch("https://instagram-express-app.vercel.app/api/auth/login",{
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify(obj)
// })
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.log(error))


// axios.post("https://instagram-express-app.vercel.app/api/auth/login",{
//     headers:{
//         token: "123456"
//     }
// }, {
//     email: "",
//     password: ""
// })
// .then(response => console.log(response.data))
// .catch(error => console.log(error))




// fetch("https://instagram-express-app.vercel.app/api/post/create",{
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Authorization": `Bearer 88965976-8cf9-40a0-8d98-fd884c817047`
//     },
//     body: JSON.stringify({
//         "text" : "I have bought a new Car", 
//         "image": "https://gaadiwaadi.com/wp-content/uploads/2019/01/Toyota-Mark-X-GRMN-Front.jpg"
//     })
// })
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.log(error))

axios.post("https://instagram-express-app.vercel.app/api/post/create",
{
   "text":"I have bought a new car",
    "image":"https://gaadiwaadi.com/wp-content/uploads/2019/01/Toyota-Mark-x-GRMN-Front.jpg",
},
{
    headers:{
        "Authorization": `Bearer 88965976-8cf9-40a0-8d98-fd884c817047`
    } ,    
}
)
.then((response)=>console.log(response.data))
.catch((error)=>console.log(error));

//AIzaSyCamG63SpP--MpyAT6AXG5zJTJhII4nZdM

axios.get("https:/www.googleapis.com/youtube/v3/search",{
    params:{
        key:"AIzaSyCamG63SpP--MpyAT6AXG5zJTJhII4nZdM",
        q:"Cute Dogs"
    }
})

.then(response =>console.log(response.data))
.catch(error=>console.log(error))

let str = "key = AIzaSyCIgeeCo941WGoaWcGxVt442FwY8pk56zM&q=Cute Dogs&part=snippet&type = video"

let obj = {
    key:"AIzaSyCamG63SpP--MpyAT6AXG5zJTJhII4nZdM",
    q:"Cute Dogs",
    part:"snippet",
    type:"video"
}

fetch(`https://www.googleapis.com/youtube/v3/search?key=${obj.key}&q=${obj.q}`,{
    method:"GET",
    headers:{
        "Content-Type":"application/json"
    },
})
