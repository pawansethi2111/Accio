let arr = [10,20,30]
            // 0,1,2
//arr[4] = 100


let map = new Map();

console.log(map);

map.set("cherry",10)
map.set("apple",20)
map.set("guava",30)

map.set(1,200)
console.log(map)

// map.has(key)

console.log(map.has(2))

console.log(map.has(200))

console.log(map.get("apple"))

console.log(map.get(2))
// map.delete(key)
map.delete(2)
console.log(map)

// map.clear()

console.log(map.size)


for(let t of map){
    console.log(t)
}

//[key,value] //t[0],t[1]
//check if a key exists in a map
//console.log(map.has(20))
