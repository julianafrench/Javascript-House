function drawGuides() {
    var ctx = document.getElementById("canvas").getContext("2d");
    
    // guide points
    var xGd1 = 150;
    var yGd1 = 100;
    var yGd2 = 250;
    
    var xGd2 = 10;
    var xGd3 = 290;
    var yGd3 = 180;

    // perspective line
    ctx.beginPath();
    ctx.moveTo(0, yGd3);
    ctx.lineTo(canvas.width, yGd3);
    ctx.strokeStyle = "red";
    ctx.stroke();
    ctx.closePath();
    
    // left roof panel
    ctx.beginPath();
    ctx.moveTo(30, 157);
    ctx.lineTo(132, 144);
    ctx.lineTo(196, 26);
    ctx.lineTo(98, 19);
    ctx.lineTo(30, 157);
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.closePath();
    
    // front wall
    ctx.beginPath();
    ctx.moveTo(41, 147);
    ctx.lineTo(43, 237);
    ctx.lineTo(163, 260);
    ctx.lineTo(164, 157);
    ctx.lineTo(41, 147);
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.closePath();
    
    // right side wall
    ctx.beginPath();
    ctx.moveTo(164, 157);
    ctx.lineTo(248, 146);
    ctx.lineTo(247, 232);
    ctx.lineTo(163, 260);
    ctx.stroke();
    ctx.closePath();
    
    // right roof
    ctx.beginPath();
    ctx.moveTo(98, 19);
    ctx.lineTo(196, 26);
    ctx.lineTo(267, 148);
    ctx.lineTo(165, 165);
    ctx.lineTo(98, 19);
    ctx.stroke();
    ctx.closePath();
    
    // right chimney wall
    ctx.beginPath();
    ctx.moveTo(207, 90);
    ctx.lineTo(220, 90);
    ctx.lineTo(220, 15);
    ctx.lineTo(207, 15);
    ctx.lineTo(207, 90);
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.closePath();
    
    //front chimney wall
    ctx.beginPath();
    ctx.moveTo(207, 15);
    ctx.lineTo(187, 15);
    ctx.lineTo(187, 60);
    ctx.lineTo(207, 90);
    ctx.stroke();
    ctx.closePath();
}
