

let mainSection = document.querySelector("main");

let imageClassNames = ["img1", "img2", "img3", "img4", "img5"];

let repeatIndex =   parseInt((Math.random() * imageClassNames.length));

imageClassNames.push(imageClassNames[repeatIndex]);

// console.log(imageClassNames);


// [img1, img2, img3, img4, img5, img1]


let h1 = document.createElement("h1");
h1.innerText = "I am not a robot";
mainSection.append(h1);


let i = 0
let count = 0

while(count< imageClassNames.length){
   
    let randomIndex = parseInt(Math.random() * imageClassNames.length); // 2
    // console.log(randomIndex)
    if(imageClassNames[randomIndex] === -1){
       continue
    }
    let img = document.createElement("img");
    img.className = imageClassNames[randomIndex];

    img.addEventListener("click", selectedImage)

    imageClassNames[randomIndex] = -1
    img.id= `pic-${count}`
    count++


    mainSection.append(img)
    
}

let h3 = document.createElement("h3");
h3.innerText = "Please click on the identical tiles to verify that you are not a robot."
h3.id = "h"
mainSection.append(h3)



let previousImageIdSet = new Set();
let clicks = 0
function selectedImage(e){
    let selectedImage = e.target;
     
    // if(previousImageId != selectedImage.id){
    //     previousImageId = selectedImage.id; // pic-0
    //     selectedImage.classList.add("selected");  

    //    console.log("Img Clicked")
        
    // }

    if(!previousImageIdSet.has(selectedImage.id)){
        previousImageIdSet.add(selectedImage.id)
        selectedImage.classList.add("selected");  
        clicks++

        
        if(clicks == 1){
            let btn = document.createElement("button");
            btn.innerText = "Reset";
            btn.id = "reset"
            mainSection.append(btn)
            btn.addEventListener("click", reset)
        }

        if(clicks == 2){
            let btn = document.createElement("button");
            btn.innerText = "Verify";
            btn.id = "verify"
            mainSection.append(btn)
            btn.addEventListener("click", verify)
        }

        if(clicks>2){
            let verifyBtn = document.getElementById("verify");
            if(verifyBtn){
                verifyBtn.remove()
            }
            // verifyBtn.style.display = "none"
        }

    }

}


function reset(e){
   
    let selectedImages = document.querySelectorAll(".selected");


    for(let t of selectedImages){
        t.classList.remove("selected");
    }

    e.target.remove()

    let verifyBtn = document.getElementById("verify");
    if(verifyBtn){
        verifyBtn.remove()
    }

    previousImageIdSet.clear()
    clicks = 0
}


function verify(e){
    let selectedImage = document.querySelectorAll(".selected");
    let para = document.createElement("p");
    if(selectedImage[0].className == selectedImage[1].className){
        para.innerText = "You are a human. Congratulations!" 
    }
    else{
        para.innerText = "We can't verify you as a human. You selected the non-identical tiles."
    }

    mainSection.append(para)

    e.target.remove()
}