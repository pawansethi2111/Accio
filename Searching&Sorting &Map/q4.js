let a1 = [10,20,30,40,50]
let a2 = [30,40,50,60,70]

let s1 = new Set(a1)
let intersection = []
for(let t of a2){
    if(s1.has(t)){
       
    }
    else{
        intersection.push(t)
    }
}
console.log(intersection);