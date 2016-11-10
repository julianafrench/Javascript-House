var drawHouse = function() {
    
    var ctx = document.getElementById("canvas2").getContext("2d");
    ctx.translate(0,-250); // move the house up
    
    function drawGuides() {    
        
        // guide points
        var yGd3 = 370;

        // perspective line
        ctx.beginPath();
        ctx.moveTo(0, yGd3);
        ctx.lineTo(canvas.width, yGd3);
        ctx.strokeStyle = "black";
        ctx.stroke();
        ctx.closePath();   
    }

    function drawRoof() {

        //front roof/wall
        ctx.beginPath();
        ctx.moveTo(41, 347);
        ctx.lineTo(98, 270);
        ctx.lineTo(163, 357);
        ctx.fillStyle = "#E8E7C0";
        ctx.fill();
        ctx.closePath();
    
        // right roof panel
        ctx.beginPath();
        ctx.moveTo(196, 276);
        ctx.lineTo(267, 348);
        ctx.lineTo(165, 365);
        ctx.lineTo(98, 269);
        ctx.fillStyle = "#903A3B";
        ctx.fill();
        ctx.closePath();
    }

    function drawWalls() {
    
        // left roof panel
        ctx.beginPath();
        ctx.moveTo(30, 357);
        ctx.lineTo(132, 344);
        ctx.lineTo(196, 276);
        ctx.lineTo(98, 269);
        ctx.lineTo(30, 357);
        ctx.fillStyle = "#903A3B";
        ctx.fill();
        ctx.closePath();
    
        // front wall
        ctx.beginPath();
        ctx.moveTo(41, 347);
        ctx.lineTo(43, 437);
        ctx.lineTo(163, 460);
        ctx.lineTo(164, 357);
        ctx.lineTo(41, 347);
        ctx.fillStyle = "#E8E7C0";
        ctx.fill();
        ctx.closePath();
    
        // right side wall
        ctx.beginPath();
        ctx.moveTo(164, 357);
        ctx.lineTo(248, 346);
        ctx.lineTo(247, 432);
        ctx.lineTo(163, 460);
        ctx.fillStyle = "#E2E1B5";
        ctx.fill();
        ctx.closePath();
    }

    function drawChimney() {
    
        // right chimney wall
        ctx.beginPath();
        ctx.moveTo(207, 310);
        ctx.lineTo(220, 310);
        ctx.lineTo(220, 255);
        ctx.lineTo(207, 255);
        ctx.lineTo(207, 310);
        ctx.strokeStyle = "black";
        ctx.stroke();
        ctx.fillStyle = "#E2E1B5";
        ctx.fill();ctx.closePath();
    
        //front chimney wall
        ctx.beginPath();
        ctx.moveTo(207, 255);
        ctx.lineTo(187, 255);
        ctx.lineTo(187, 290);
        ctx.lineTo(207, 310);
        ctx.stroke();
        ctx.fillStyle = "#E8E7C0";
        ctx.fill();
        ctx.closePath();
    }

    function drawDoor() {
        ctx.beginPath();
        ctx.moveTo(196, 383);
        ctx.lineTo(196, 448);
        ctx.lineTo(215, 441);
        ctx.lineTo(216, 378);
        ctx.lineTo(196, 383);
        ctx.strokeStyle = "#98510d";
        ctx.stroke();
        ctx.fillStyle = "#de852b";
        ctx.fill();
        ctx.closePath();
    
        ctx.beginPath();
        ctx.arc(210, 412, 2, 0, Math.PI * 2, true);
        ctx.fillStyle = "#98510d";
        ctx.fill();
        ctx.closePath();
    }

    function drawWindows() {
    
    
    }
    
    drawWalls();
    drawRoof();
    drawChimney();
    drawDoor();
}
