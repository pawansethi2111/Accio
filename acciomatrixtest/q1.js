class Patient{

constructor(name,age,medicalHistory){
    this.name  = name
    this.age = age
    this.medicalHistory = []
    }
    addMedicalHistory(diseases){
        this.medicalHistory.push(diseases)
    } 

    getMedicalHistory()
    {
        return this.medicalHistory
    }
}

let p1 = new Patient("Hello",20)

p1.addMedicalHistory("flu")
p1.addMedicalHistory("swineflu")
console.log(p1.getMedicalHistory())

let p2 = new Patient("Hello1",20)

p2.addMedicalHistory("a")
p2.getMedicalHistory("b")
console.log(p2.getMedicalHistory())