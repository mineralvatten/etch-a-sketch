maingrid = document.getElementById('maingrid');
/*
for (i = 0; i < 16; i++) {
    subdiv = document.createElement('div');
    subdiv.style.display = 'flex';
    maingrid.appendChild(subdiv);
    subdiv.style.flex = 1;
    subdiv.style.background = "white";
}
subdivs = maingrid.childNodes;
for (sub of Array.from(subdivs)) {
    for (i = 0; i < 16; i++) {
        subElement = document.createElement('div');
        subElement.style.display ='flex';
        subElement.style.flex = "0 0 auto";
        subElement.style.aspectRatio = "1/1";
        subElement.style.background = "black";
        sub.appendChild(subElement);
    }
}
*/
function promptHandler() {
    input = prompt("Give the number of squares on each side:", "16");
    if (0 < Number(input) <= 100) {
        maingrid.innerHTML = "";
        create_grid(Number(input))
    }
    else {
        console.log("Invalid input, give a number between 1 and 100 inclusive.")
    }
}
function createButton () {
    btn = document.createElement('button');
    btn.textContent = "Change grid sidelength";
    btn.addEventListener('click', promptHandler);
    document.querySelector('body').appendChild(btn);
}
function handleHover (event) {
    event.target.style.background="black";
}
function create_grid(sideLength) {
    for (i = 0; i < sideLength**2; i++) {
        subElement = document.createElement('div');
        subElement.style.display ='flex';
        subElement.style.flex = "0 0 auto";
        subElement.style.width = String(800/sideLength) + "px";
        subElement.style.height= String(800/sideLength) + "px";
        subElement.style.aspectRatio = "1/1";
        subElement.style.background = "white";
        subElement.addEventListener('mouseover', handleHover);
        maingrid.appendChild(subElement);
    }
}
createButton();
create_grid(16);

/*
    for (i = 0; i < sideLength **2; i ++) {
        subElement = document.createElement('div');
        subElement.style.display ='flex';
        subElement.style.flex = "0 0 auto";
        //subElement.style.width = (800/sideLength);
        subElement.style.aspectRatio = "1/1";
        subElement.style.background = "black";
        parentElement.appendChild(subElement);
    }
*/