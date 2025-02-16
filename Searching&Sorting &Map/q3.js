let a1 = [10,20,30,40,50]
let a2 = [30,40,50,60,70]

let s2 = new Set(a2)
let intersection = []
for(let t of a1){
    if(s2.has(t)){
       
    }
    else{
        intersection.push(t)
    }
}
console.log(intersection);

//2nd method
for(let t of a1)
{
    if(s2.has(t)==false)
    {
        intersection.push(t)   
    }    
}
console.log(intersection);