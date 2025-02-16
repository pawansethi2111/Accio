

class Counter{
    constructor(){
        this.count = 0;
    }

    increment(){
        this.count++;
    }   

    getCount(){
        console.log(this.count);
    }
}

let obj= new Counter();

obj.increment();
obj.increment();
obj.increment();

obj.getCount();
let obj2 = new Counter();
obj2.getCount();

class CovidDetails{

    static totalCases = 0;
    static totalRecovered = 0;
    static totalDeaths = 0;


    constructor(state,cases,recovered,deaths){
        // this.country = "India";
        this.state = state;
        this.cases = cases;
        CovidDetails.totalCases += cases;
        this.deaths =deaths;
        CovidDetails.totalDeaths += deaths;
        this.recovered = recovered;
        CovidDetails.totalRecovered += recovered;
    }
    setCases(cases){
        this.cases = cases;
    }
    setRecovered(recovered){
        this.recovered = recovered;
    }
    setDeaths(deaths){
        this.deaths = deaths;
    }
    displayDetails(){
        console.log("State is",this.state);
        console.log("Cases are",this.cases);
        console.log("Recovered are",this.recovered);
        console.log("Deaths are",this.deaths);
    }

    static displayTotalDetails(){
        console.log("Total Cases are",CovidDetails.totalCases);
        console.log("Total Recovered are",CovidDetails.totalRecovered);
        console.log("Total Deaths are",CovidDetails.totalDeaths);
    }

}

// console.log("Initial Total Cases are",CovidDetails.totalCases);
// console.log("Initial Total Recovered are",CovidDetails.totalRecovered);
// console.log("Initial Total Deaths are",CovidDetails.totalDeaths);

CovidDetails.displayTotalDetails();

let delhi = new CovidDetails("Delhi",1000,500,100);
console.log(delhi.state, delhi.cases, delhi.recovered, delhi.deaths);

delhi.displayDetails();

let tamilnadu = new CovidDetails("Tamilnadu",2000,1000,200);
tamilnadu.displayDetails();

let maharashtra = new CovidDetails("Maharashtra",3000,1500,300);
maharashtra.displayDetails();

let karnataka = new CovidDetails("Karnataka",4000,2000,400);
karnataka.displayDetails();

CovidDetails.displayTotalDetails();

console.log("Total Cases are",CovidDetails.totalCases);
console.log("Total Recovered are",CovidDetails.totalRecovered);
console.log("Total Deaths are",CovidDetails.totalDeaths);