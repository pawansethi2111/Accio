
class Ipl{

    constructor(team_name,captain_name,captain_salary){
    // console.log(team_name,captain_name,captain_salary)
    this.TeamName = team_name
    this.name = captain_name
    this.salary = captain_salary
    }

    // decideTeamName(tname){
    //     this.TeamName = tname
    // }
    // decideCaptain(name){
    //     this.name = name
    // }
    // decideCaptainSalary(salary){
    //     this.salary = salary
    // }

    displayCaptainDetails(){
        console.log("Team is",this.TeamName)
        console.log("Captain is",this.name)
        console.log("Captain salary is",this.salary)
    }

}

let mumbaiIndians = new Ipl("Mumbai Indians","Rohit Sharma",1000000)
mumbaiIndians.displayCaptainDetails()

// console.log(mumbaiIndians)
// mumbaiIndians.decideTeamName("Mumbai Indians")
// mumbaiIndians.decideCaptain("Rohit Sharma")
// mumbaiIndians.decideCaptainSalary(1000000)
// mumbaiIndians.displayCaptainDetails()

// console.log("*****************************")

// let chennaiSuperKings = new Ipl()

// console.log(chennaiSuperKings)
// chennaiSuperKings.decideTeamName("Chennai Super Kings")
// chennaiSuperKings.decideCaptain("MS Dhoni")
// chennaiSuperKings.decideCaptainSalary(2000000)
// chennaiSuperKings.displayCaptainDetails()

// console.log("*****************************")

// mumbaiIndians.displayCaptainDetails()


// let delhiCapitals = new Ipl()
// console.log(delhiCapitals)
// delhiCapitals.decideTeamName("Delhi Capitals")
// delhiCapitals.decideCaptain("Rishabh Pant")
// delhiCapitals.decideCaptainSalary(3000000)
// delhiCapitals.displayCaptainDetails()




// let set  = new Set(arr)