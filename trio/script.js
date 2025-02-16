// let a = 10

// QuerySelector

// let h1 = document.querySelector('h1')

// let h1 = document.querySelectorAll('h1');
// 
// innerText, innerHTML, textContent

// innerText => find or replace the text of element within the tags


//style : dynamically:

//head1.style.color = 'red'

// head1.style.backgroundColor = 'black'

//head1.style.cssText = `
// color:red;
// backgroundcolor:black;
// `



// head1.className = 'heading'
// head1.className = head1.className+" "+'heading' //less used


// let buttons = document.querySelectorAll(".gNO89b")
// undefined
// buttons
// NodeList(2) [input.gNO89b, input.gNO89b]
// buttons[1]
// <input class=​"gNO89b" value=​"Google Search" aria-label=​"Google Search" name=​"btnK" role=​"button" tabindex=​"0" type=​"submit" data-ved=​"0ahUKEwiui5-RnpiKAxUCoa8BHRyxBRsQ4dUDCBY">​
// buttons[1]

// buttons[1].value = "Pawan Search"


//events

//addEventListener => aunty

let btn = document.querySelector('button')

//events => "click"

button.addEventListener("click",display)

function display()
{
    console.log('Button is clicked')
}

