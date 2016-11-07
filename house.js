function drawGuides() {
    var ctx = document.getElementById("canvas").getContext("2d");
    
    // guide points
    var xGd1 = 150;
    var yGd1 = 100;
    var yGd2 = 250;
    
    var xGd2 = 10;
    var xGd3 = 290;
    var yGd3 = 180;
    
    // initial height of house
    ctx.beginPath();
    ctx.moveTo(xGd1, yGd1);
    ctx.lineTo(xGd1, yGd2);
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.closePath();
    
    // perspective line
    ctx.beginPath();
    ctx.moveTo(0, yGd3);
    ctx.lineTo(canvas.width, yGd3);
    ctx.strokeStyle = "red";
    ctx.stroke();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.moveTo(xGd3, yGd3)
    ctx.lineTo(xGd1, yGd1);
    ctx.stroke();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.moveTo(xGd2, yGd3);
    ctx.lineTo(xGd1, yGd1);
    ctx.stroke();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.moveTo(xGd3, yGd3)
    ctx.lineTo(xGd1, yGd2);
    ctx.stroke();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.moveTo(xGd2, yGd3);
    ctx.lineTo(xGd1, yGd2);
    ctx.stroke();
    ctx.closePath();
    
    // left end of house
    ctx.beginPath();
    ctx.moveTo(50, 200);
    ctx.lineTo(50, 157);
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.closePath();
    
    //right end of house
    ctx.beginPath();
    ctx.moveTo(yGd2, 200);
    ctx.lineTo(yGd2, 157);
    ctx.stroke();
    ctx.closePath();
}
