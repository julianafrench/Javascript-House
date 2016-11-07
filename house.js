function drawGuides() {
    var ctx = document.getElementById("canvas").getContext("2d");
    
    // guide points
    var yGd3 = 320;

    // perspective line
    ctx.beginPath();
    ctx.moveTo(0, yGd3);
    ctx.lineTo(canvas.width, yGd3);
    ctx.strokeStyle = "red";
    ctx.stroke();
    ctx.closePath();   
}

function drawRoof() {
    var ctx = document.getElementById("canvas").getContext("2d");
    
    // right roof panel
    ctx.beginPath();
    ctx.moveTo(196, 276);
    ctx.lineTo(267, 348);
    ctx.lineTo(165, 365);
    ctx.lineTo(98, 269);
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.closePath();
    
    // left roof panel
    ctx.beginPath();
    ctx.moveTo(30, 357);
    ctx.lineTo(132, 344);
    ctx.lineTo(196, 276);
    ctx.lineTo(98, 269);
    ctx.lineTo(30, 357);
    
    ctx.stroke();
    ctx.closePath();
}

function drawWalls() {
    var ctx = document.getElementById("canvas").getContext("2d");
    
    // front wall
    ctx.beginPath();
    ctx.moveTo(41, 347);
    ctx.lineTo(43, 437);
    ctx.lineTo(163, 460);
    ctx.lineTo(164, 357);
    ctx.lineTo(41, 347);
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.closePath();
    
    // right side wall
    ctx.beginPath();
    ctx.moveTo(164, 357);
    ctx.lineTo(248, 346);
    ctx.lineTo(247, 432);
    ctx.lineTo(163, 460);
    ctx.stroke();
    ctx.closePath();
}
function drawChimney() {
    var ctx = document.getElementById("canvas").getContext("2d");
    
    // right chimney wall
    ctx.beginPath();
    ctx.moveTo(207, 310);
    ctx.lineTo(220, 310);
    ctx.lineTo(220, 255);
    ctx.lineTo(207, 255);
    ctx.lineTo(207, 310);
    ctx.stroke();
    ctx.closePath();
    
    //front chimney wall
    ctx.beginPath();
    ctx.moveTo(207, 255);
    ctx.lineTo(187, 255);
    ctx.lineTo(187, 290);
    ctx.lineTo(207, 310);
    ctx.stroke();
    ctx.closePath();
}

function drawDoor() {
    var ctx = document.getElementById("canvas").getContext("2d");
    
}

function drawWindows() {
    var ctx = document.getElementById("canvas").getContext("2d");
    
}

function drawHouse() {
    drawRoof();
    drawWalls();
    drawChimney();
}