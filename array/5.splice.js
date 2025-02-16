let arr = [10,20,30,40,50,60]
arr.splice(2,3)
//splice can delete
//2 index se elements delete krne he and 3 is the count of elements to be deleted
//arr.splice(2,1) //
console.log(arr)
//kis index ke pas change krna he
//2nd index is count of number of elements to be deleted
arr.splice(0)
console.log(arr)

//splice can insert

arr.splice(2,0,100,200)
console.log(arr)
//2 index ke pehle 0 elements delete krne he and 100 include karna he
//insert between 2 and 1 it will insert

arr = [10,20,30,40,50,60]
arr.splice(2,3,500)
console.log(arr)


