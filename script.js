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
function create_grid(sideLength) {
    for (i = 0; i < sideLength**2; i++) {
        subElement = document.createElement('div');
        subElement.style.display ='flex';
        subElement.style.flex = "0 0 auto";
        subElement.style.width = String(800/sideLength) + "px";
        subElement.style.height= String(800/sideLength) + "px";
        subElement.style.aspectRatio = "1/1";
        subElement.style.background = "black";
        maingrid.appendChild(subElement);
    }
}
create_grid(100);

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