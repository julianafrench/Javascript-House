var canvas;
var ctx;
var speed;
var interval;

var drawSmokes = function () {
    speed = 200;

    canvas = document.getElementById("canvas1");
    ctx = canvas.getContext("2d");

    interval = setInterval(animateSmoke, speed);
};

function drawSmoke1() {
    ctx.beginPath();
    ctx.arc(60, 50, 20, Math.PI, 2 * Math.PI);
    ctx.strokeStyle = "whitesmoke";
    ctx.stroke();

    ctx.arc(100, 50, 20, Math.PI, 2 * Math.PI);
    ctx.stroke();

    ctx.arc(140, 50, 20, Math.PI, 2 * Math.PI);
    ctx.stroke();

    ctx.arc(160, 70, 20, 1.5 * Math.PI, 2 * Math.PI);
    ctx.stroke();

    ctx.arc(180, 90, 20, 1.5 * Math.PI, 0.5 * Math.PI);
    ctx.stroke();

    ctx.arc(160, 110, 20, 0, 0.5 * Math.PI);
    ctx.stroke();

    ctx.arc(140, 130, 20, 0, Math.PI);
    ctx.stroke();

    ctx.arc(100, 130, 20, 0, Math.PI);
    ctx.stroke();


    ctx.arc(60, 130, 20, 0, Math.PI);
    ctx.stroke();

    ctx.arc(40, 110, 20, 0.5 * Math.PI, Math.PI);
    ctx.stroke();

    ctx.arc(20, 90, 15, 0.5 * Math.PI, 1.5 * Math.PI);
    ctx.stroke();

    ctx.arc(40, 70, 20, Math.PI, 1.5 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = "white";
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

    clearInterval(interval);

    speed = 400 - parseInt(val);
    interval = setInterval(animateSmoke, speed);

};
