// Challenging Practical Question on Static Variables in JavaScript

// Scenario: Caching API Calls Efficiently

// You are designing a class APIClient that fetches data from a server. However, to improve efficiency, you want to cache responses so that repeated calls with the same URL do not trigger unnecessary network requests.

// Your task is to:
// 	1.	Use a static variable to store previously fetched results.
// 	2.	Implement a method fetchData(url) that:
// 	•	If data for the url is already cached, return it from the cache.
// 	•	If not, fetch from the API, store it in the cache, and return the response.
// 	3.	Ensure caching applies across all instances of APIClient.

// How Would You Implement This?



class APIClient{
    static map = new Map()
   constructor(city)
   {
     this.city = city;
     if(APIClient.map.has(this.city)){
         console.log("Called from Cache")
        console.log(APIClient.map.get(this.city))
     }else{
        console.log("Made a  api request")
        this.#getWeather().then(response => {
            // console.log(response)
            return response.json()}).then(data => {            
            APIClient.map.set(this.city, data.current.temp_c)
            console.log(data.current.temp_c)
            console.log(APIClient.map)
        }) 
     }
   }   
#getWeather(){
return fetch(`http://api.weatherapi.com/v1/current.json?key=099e2f18595649f6805110216250802&q=${this.city}`)
    }
}

let w1 = new APIClient("Noida") // API 
setTimeout(() => {new APIClient("Noida")}, 2000)
    
// let w2 = new APIClient("Noida") // Cache

// setTimeout(() => {}, 2000)
// let w3 = new APIClient("Delhi") // API

// setTimeout(() => {}, 2000)
// let w4 = new APIClient("Delhi") // Cache