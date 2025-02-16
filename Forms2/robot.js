

let imgClassNames = ["img1","img2","img3","img4","img5"]

let randomIndex = Math.floor(Math.random()*imgClassNames.length)

let randomImg = imgClassNames[randomIndex]

imgClassNames.push(randomImg)

//loop : 6 times:

for(let i=0;i<6;i++){
    let img = document.createElement("img")
    img.className = imgClassNames[i]

    xyz.append(img)
}