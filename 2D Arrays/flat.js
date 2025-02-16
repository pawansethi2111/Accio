

// let arr = [10,[20,30],[40,50,60],70,80,90,100]

//flatten an array

// let x = arr.flat()
// console.log(x)

let arr = [10,[20,30],[40,[50],60],70,[80,[78,79],90,100]]

let x = arr.flat(Infinity)
console.log(x)

