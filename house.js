var drawHouse = function() {
    
    var ctx = document.getElementById("canvas2").getContext("2d");
    ctx.translate(0,-250); // move the house up

    function drawRoof() {
    
        // right roof panel
        ctx.beginPath();
        ctx.moveTo(196, 276);
        ctx.lineTo(267, 348);
        ctx.lineTo(163, 365);
        ctx.lineTo(93, 261);
        ctx.fillStyle = "darkred";
        ctx.fill();
        ctx.closePath();
        
        //left roof panel & trim
        ctx.beginPath();
        ctx.moveTo(26, 357);
        ctx.lineTo(23, 354);
        ctx.lineTo(94, 261);
        ctx.lineTo(98, 269);
        ctx.lineTo(36, 357);
        ctx.fillStyle = "darkred";
        ctx.fill();
        ctx.closePath();
        
    }
    
    function drawWalls() {
        
        // front wall
        ctx.beginPath();
        ctx.moveTo(164, 460);
        ctx.lineTo(164, 366);
        ctx.lineTo(98, 268);
        ctx.lineTo(36, 355);
        ctx.lineTo(38, 440);
        ctx.lineTo(164, 460);
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
        ctx.fillStyle = "#E2E1B5";
        ctx.fill();
        ctx.closePath();
    
        //front chimney wall
        ctx.beginPath();
        ctx.moveTo(207, 255);
        ctx.lineTo(187, 255);
        ctx.lineTo(187, 290);
        ctx.lineTo(207, 310);
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
        ctx.fillStyle = "#de852b";
        ctx.fill();
        ctx.strokeStyle = "#98510d";
        ctx.stroke();
        ctx.closePath();
    
        ctx.beginPath();
        ctx.arc(210, 412, 2, 0, Math.PI * 2, true);
        ctx.fillStyle = "#98510d";
        ctx.fill();
        ctx.closePath();
    }

    function drawWindows() {
        
        //first window
        ctx.save();
        ctx.translate(55, 275);
        ctx.scale(0.4,0.3);
        ctx.beginPath();
        ctx.moveTo(164, 465);
        ctx.lineTo(164, 375);
        ctx.lineTo(36, 355);
        ctx.lineTo(36, 440);
        ctx.lineTo(164, 460);
        
        ctx.moveTo(95, 450);
        ctx.lineTo(95, 365);
        ctx.restore();
        
        ctx.fillStyle = "#FFFF50"; 
        ctx.fill();        
        ctx.lineWidth = 3;
        ctx.strokeStyle = "#98510d";
        ctx.stroke();
        
        //second window
        ctx.save();
        ctx.translate(140, 318);
        ctx.scale(0.2,0.2);
        ctx.beginPath();
        ctx.moveTo(164, 370);
        ctx.lineTo(248, 346);
        ctx.lineTo(247, 432);
        ctx.lineTo(163, 460);
        ctx.closePath();
        ctx.restore();
        
        ctx.fillStyle = "#FFFF50"; 
        ctx.fill();        
        ctx.lineWidth = 3;
        ctx.strokeStyle = "#98510d";
        ctx.stroke();
        
        //third window
        ctx.save();
        ctx.translate(190, 305);
        ctx.scale(0.2,0.2);
        ctx.beginPath();
        ctx.moveTo(164, 370);
        ctx.lineTo(248, 346);
        ctx.lineTo(247, 432);
        ctx.lineTo(163, 460);
        ctx.closePath();
        ctx.restore();
        
        ctx.fillStyle = "#FFFF50"; 
        ctx.fill();        
        ctx.lineWidth = 3;
        ctx.strokeStyle = "#98510d";
        ctx.stroke();
    }
    
    function drawSun() {
        ctx.beginPath();
        ctx.arc(28, 280, 12, 0, 2 * Math.PI);
        ctx.fillStyle = "#FFAF0A";
        ctx.fill();
        ctx.closePath();
        
        ctx.beginPath();
        ctx.arc(28, 280, 16, 0, 2 * Math.PI);
        ctx.fillStyle = "rgba(255, 215, 0, 0.5)";
        ctx.fill();
        ctx.closePath();
    }
    
     function drawGrass() {
        ctx.save();
        ctx.scale(1,0.5);
        ctx.beginPath();
        ctx.arc(170,1000,220,0,2 * Math.PI);
        ctx.restore();
        ctx.fillStyle = "#50D050";
        ctx.fill();
    }
    
    drawSun();
    drawGrass();
    drawWalls();
    drawRoof();
    drawChimney();
    drawDoor();
    drawWindows(); 
};
