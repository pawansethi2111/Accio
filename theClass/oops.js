//Encapsulation:
//Inheritance: by using extends keyword
//Polymorphism:  => method overloading => not supported in JS, method overriding => supported in js
//Abstraction:

class Ipl{
    constructor(country)
    {
        this.country = country;
    }

    rules(){
        console.log("Rules");
        console.log("1. 5 overs");
        console.log("2. 10 wickets");
        console.log("3. 100 runs");        
    }
    // setCaptain(captain){
    //     this.captain = captain;
    // }
    // getCaptain(){
    //     return this.captain;
    // }
}


class MumbaiIndians extends Ipl{

    constructor(teamName){
        super("India");    
        this.teamName = teamName;
        console.log("Team Name is"+this.teamName);
        console.log("Country Name is"+this.country);
    }
    //overriding => polymorphism
    rules(){
        super.rules();
        console.log("Extra rules by Mumbai Indians");
    }
    // getDetails(){
    //     console.log("Team Name"+this.teamName);
    //     console.log("Country Name"+this.country);
    // }
}


// let india = new Ipl("India");
let mi = new MumbaiIndians("Mumbai Indians");
mi.rules();