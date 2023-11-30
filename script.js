maingrid = document.getElementById('maingrid');
maingrid.flag = "normal";

function generateRandomRgb() {
    rgbString = "rgb("
    for (i=0;i < 3; i++){
         rgbString += `${Math.floor(Math.random() * 256)},`
    }
    rgbString = rgbString.split("");;
    rgbString[rgbString.length -1] = ")";
    rgbString = rgbString.join("");
    return rgbString;
}
function darkening(numberInteractions) {
    rgbString = "rgb("
    for (i=0;i < 3; i++){
         rgbString += `${255 - (255/10) * numberInteractions},`
    }
    rgbString = rgbString.split("");;
    rgbString[rgbString.length -1] = ")";
    rgbString = rgbString.join("");
    return rgbString;
}
function promptHandler() {
    input = prompt("Give the number of squares on each side:", "16");
    if ((Number(input) <= 100) && (Number(input) > 0) && ((Math.floor(Number(input)) - Number(input)) == 0) ) {
        maingrid.flag = "neutral";
        maingrid.innerHTML = "";
        div1.textContent = "";
        create_grid(Number(input))
    }
    else {
        div1.textContent = "Invalid input, give a number between 1 and 100 inclusive.";
    }
}
function createButtons () {
    btndiv = document.createElement('div');
    btndiv.style.display = "flex";
    btndiv.style.maxWidth = "150px";
    btndiv.style.height = "600px";
    btndiv.style.flexDirection = "column";
    btndiv.style.flex = "1 0 auto";
    document.querySelector('body').appendChild(btndiv);
    btn = document.createElement('button');
    btn.textContent = "Change grid sidelength";
    btn.addEventListener('click', promptHandler);
    btndiv.appendChild(btn);
    btn2 = document.createElement('button');
    btn2.textContent = "Random square color";
    btn2.addEventListener('click', () => maingrid.flag = "random");
    btndiv.appendChild(btn2);
    btn3 = document.createElement('button');
    btn3.textContent = "Progressive darkening of squares";
    btn3.addEventListener('click', () => maingrid.flag = "darkening");
    btndiv.appendChild(btn3);
    for (button of document.querySelectorAll('button')) {
        button.style.display = "flex";
        button.style.flex = "0";
        button.style.justifySelf = "center";
        button.style.margin = "16px";
        button.style.padding = "16px";
    }
}
function handleHover (event) {
    if (maingrid.flag == "normal") {
        event.target.style.background = "rgb(0,0,0)";
    }
    else if (maingrid.flag == "darkening") {
        if (maingrid.numberInteractions >= 10) {
            event.target.style.background = "rgb(0,0,0)";
            maingrid.numberInteractions = 0;
        }
        else {
            maingrid.numberInteractions += 1;
            event.target.style.background = darkening(maingrid.numberInteractions);
        }
    }
    else if (maingrid.flag == "random") {
        event.target.style.background = generateRandomRgb(maingrid.numberInteractions);
    }
}
function create_grid(sideLength) {
    maingrid.numberInteractions = 0;
    maingrid.flag = "normal";
    for (i = 0; i < sideLength**2; i++) {
        subElement = document.createElement('div');
        subElement.style.display ='flex';
        subElement.style.flex = "0 0 auto";
        subElement.style.width = String(800/sideLength) + "px";
        subElement.style.height= String(800/sideLength) + "px";
        subElement.style.background = "white";
        subElement.addEventListener('mouseover', handleHover);
        maingrid.appendChild(subElement);
    }
}
function createDiv() {
    div1 = document.createElement('div');
    div1.style.display ="flex"
    div1.style.flex = "0 0 auto";
    div1.style.margin = "16px";
    //div1.style.minWidth = "300px";
    btndiv.appendChild(div1);
}
create_grid(16);
createButtons();
createDiv();
