
let a1 = [10,20,30,40,50]
let a2 = [30,40,50,60,70]

//Take two arrays find union of both arrays

//intersection of both arrays

//find a1-a2 (all elements of a1 which are not in a2)
//find a2-a1(all elements of a2 which are not in a1)
//symmetric differences => not common elements of both arrays
//check if array2 is subset of array1
//find a1-a2
//given an array check if it has only unique elements or not 

let s = new Set()
for(let t of a1)
{
    s.add(t)
}

for(let t of a2)
{
    s.add(t)
}
for(let t of s )
{
    console.log(t)
}


