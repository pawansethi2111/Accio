let a1 = [10,20,30,40,50]
let a2 = [30,40,50,60,70]


let s2 = new Set(a2)
let intersection = []
for(let t of a1){
    if(s2.has(t)){
        intersection.push(t)
    }
}
console.log(intersection);

// space =>O(n)
// time => O(n)
