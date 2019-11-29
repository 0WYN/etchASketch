const drawLoc = document.querySelector("#container");
const pixels = document.querySelectorAll(".pixel");
const root = document.documentElement; //used for custom-attributes in css

function drawGrid(size){
    for (i=size*size; i>0; i--){
        pixel = document.createElement("div");
        pixel.classList.add("pixel")
        drawLoc.appendChild(pixel);
        pixel.setAttribute("onmouseover", "addColour(this)")
        
    }

    root.style.setProperty('--size-grid', "repeat(" + size + ", auto)");//custom-attributes
    root.style.setProperty('--size-px', (700/size) + "px");
            
            
}

function addColour(x){
    /*let randomRed = Math.floor(Math.random() * 255); //makes the colour a random value
    let randomGreen = Math.floor(Math.random() * 255);
    let randomBlue = Math.floor(Math.random() * 255);
    */

    let randomBlue = 255;
    let randomGreen = 255;
    let randomRed = 255;

    root.style.setProperty('--px-color', "rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")");
    x.classList.add("mouseOver");
}


document.body.addEventListener("click", event => {
    if (event.target.nodeName == "BUTTON") {    //checks if the click event was on a button
        console.log("Clicked", event.target.textContent);
        while (drawLoc.firstChild){  //if the node has any children when the button is pushed it will remove them all
        drawLoc.removeChild(drawLoc.firstChild);
        }
        drawGrid(prompt("How large of a grid would you like?", 16)); 
    }
});

drawGrid(16);