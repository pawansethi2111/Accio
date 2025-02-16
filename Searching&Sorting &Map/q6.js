let arr1 = [10,20,30,40,50]
let arr2 = [30,100,40,50]

function checkSubset(a1,a2)
{
let s1 = new Set(a1)

for(let t of a2){
    if(s1.has(t)==false){
        return false
    }
}
return true
}

console.log(checkSubset(arr1,arr2))
 

 