var canvas;
var ctx;
var speed;
var interval1;
var interval2;
var n = 1;

function drawSmokes() {
    setTimeout(function() {animateSmokes(); }, 1000);
}

var animateSmokes = function () {
    speed = 700;

    canvas = document.getElementById("canvas1");
    ctx = canvas.getContext("2d");

    interval1 = setInterval(animateSmoke, speed);
};

var smokeColor = function () {
    if (n % 3 == 1)
        ctx.fillStyle = "whitesmoke";
    else if (n % 3 == 2)
        ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
        else
            ctx.fillStyle = "rgba(255, 255, 255, 0.2)";
   n++;
        
};

function drawSmoke1() {
    ctx.beginPath();
    ctx.arc(60, 50, 20, Math.PI, 2 * Math.PI);
    ctx.arc(100, 50, 20, Math.PI, 2 * Math.PI);
    ctx.arc(140, 50, 20, Math.PI, 2 * Math.PI);
    ctx.arc(160, 70, 20, 1.5 * Math.PI, 2 * Math.PI);
    ctx.arc(180, 90, 20, 1.5 * Math.PI, 0.5 * Math.PI);
    ctx.arc(160, 110, 20, 0, 0.5 * Math.PI);
    ctx.arc(140, 130, 20, 0, Math.PI);
    ctx.arc(100, 130, 20, 0, Math.PI);
    ctx.arc(60, 130, 20, 0, Math.PI);
    ctx.arc(40, 110, 20, 0.5 * Math.PI, Math.PI);
    ctx.arc(20, 90, 15, 0.5 * Math.PI, 1.5 * Math.PI);
    ctx.arc(40, 70, 20, Math.PI, 1.5 * Math.PI);
    smokeColor();
    interval2 = setInterval(smokeColor, 1600);
    ctx.fill();
};

function drawSmoke2() {
    ctx.save();
    ctx.translate(100, 150);
    ctx.scale(0.6, 0.6);


    drawSmoke1();
    ctx.restore();
};

function drawSmoke3() {
    ctx.save();
    ctx.translate(160, 250);
    ctx.scale(0.3, 0.3);

    drawSmoke1();
    ctx.restore();
};

function drawSmoke4() {
    ctx.save();
    ctx.translate(190, 300);
    ctx.scale(0.15, 0.15);

    drawSmoke1();
    ctx.restore();
};

function drawSmoke5() {
    ctx.save();
    ctx.translate(0, 200);

    drawSmoke2();
    ctx.restore();
};

function drawSmoke6() {
    ctx.save();
    ctx.translate(30, 150);

    drawSmoke3();
    ctx.restore();
};

function drawSmoke7() {
    ctx.save();
    ctx.translate(40, 200);

    drawSmoke4();
    ctx.restore();
};

var a = 150;
var b = 150;

var x = 0.4;
var y = 0.4;

var animateSmoke = function () {
    ctx.save();
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.translate(a, b);
    ctx.scale(x, y);

    drawSmoke1();
    drawSmoke2();
    drawSmoke3();
    drawSmoke4();
    drawSmoke5();
    drawSmoke6();
    drawSmoke7();
    ctx.restore();

    x *= 1.1;
    y *= 1.1;

    a -= 20;
    b -= 50;

    if (b < -300) {
        a = 150;
        b = 150;

        x = 0.4;
        y = 0.4;
    }

};

function speedControl(val) {

    clearInterval(interval1);

    speed = 1400 - parseInt(val);
    interval1 = setInterval(animateSmoke, speed);

};
