import axios from 'axios';
// const axios = require('axios')


// function makeMultipleRequest(){
//     console.log("A")
//     let randomNumber = Math.floor(Math.random() * 20) + 1

//     axios.get(`https://fakestoreapi.com/products/${randomNumber}`)
//     .then(response=>{
//         console.log("Initial Product info",response.data)        

//         let updateId = response.data.id

//         console.log("#######################")
//         console.log()
//         console.log()
//         console.log("Starting to Update")


//         axios.put(`https://fakestoreapi.com/products/${updateId}`,{
//             title:'Remesh is Dancing',
//         })
//         .then(response=>{
//             console.log("Updated Product info",response.data)        
//             console.log("Update completed")
//             let updatedId = response.data.id
            
//             console.log("#######################")
//             console.log()
//             console.log()

//             axios.delete(`https://fakestoreapi.com/products/${updateId}`)
//             .then(response=>{
//                 console.log("Deleted Product info",response.data)        
//                 console.log("Delete completed")
//             })
//             .catch(err=>console.log(err))
//         })
//         .catch(err=>console.log(err))
        
//     })
//     .catch(err=>console.log(err))
// }




async function makeMultipleRequest(){
    console.log("A")
    let randomNumber = Math.floor(Math.random() * 20) + 1
    try{
        const response1 = await axios.get(`https://fakestoreapi.com/products/${randomNumber}`)

        console.log("get Product",response1.data)
        let updateId = response1.data.id

        const response2 = await axios.put(`https://fakestoreapi.com/products/${updateId}`,{
            title:'Ramesh is Dancing',
            })
            console.log("Updated Product info",response2.data)

            let updatedId= response2.data.id

            const response3 = await axios.delete(`https://fakestoreapi.com/products/${updatedId}`)

            console.log("Deleted Product info",response3.data)
    }
    catch(error){
        console.log(error)
    }
}
makeMultipleRequest()


// let a= 10

// let s1= "Hello"+a
// `Hello`