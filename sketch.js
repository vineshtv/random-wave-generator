var radii = [];
var wavex = [];
var wavey = [];
var wavel = 1000;
var numC = 2;
var time = 0;
var speeds = [];
var phases = [];
var pChoice = ['0', 'PI/2', 'PI', '3PI/2'];
function setup() {
	createCanvas(1400, 700);
    numC = floor(random(2, 50));
    for (let i = 0; i < numC; i++){
        radii[i] = floor(random(5, 20));
        speeds[i] = floor(random(-10, 10));
        phases[i] = get_shift(random(pChoice));
    }
    console.log("radii: " + radii);
    console.log("speeds: " + speeds);
    console.log("phases: " + phases);
}

function get_shift(v) {
    if (v == '0') {
        return 0;
    } else if (v == 'PI/2') {
        return PI / 2;
    } else if (v == 'PI') {
        return PI;
    } else if (v == '3PI/2') {
        return 3 * PI / 2;
    }
}

function draw(){
    background(51);
    stroke(0, 255, 0, 20);
    line(350, 0, 350, 700);
    line(0, 350, 1400, 350);

    let x = 350;
    let y = 350;
    for(let i = 0; i < numC; i++){
        var r = radii[i];
        var s = speeds[i];
        var p = phases[i];
        push();
        translate(x, y);
        stroke(255, 255, 0, 50);
        noFill();
        ellipse(0, 0, 2 * r, 2 * r);
        var x1 = r * cos(p + time * s);
        var y1 = r * sin(p + time * s);
        var nextx = x + x1;
        var nexty = y + y1;
        //var nextx = x + r * cos(p + time * s);
        //var nexty = y + r * sin(p + time * s);
        stroke(255, 0, 0, 100);
        line(0, 0, x1, y1);
        x = nextx;
        y = nexty;
        pop();
    }

    wavex.unshift(x);
    wavey.unshift(y);

    /*
    beginShape();
    stroke(255);
    noFill();
    for (let i = 0; i < wavex.length; i++) {
        vertex(wavex[i], wavey[i]);
    }
    endShape();
    */

    if (wavex.length < 50){
        beginShape();
        stroke(0, 255, 255);
        noFill();
        for(let i = 0; i < wavex.length; i++){
            vertex(wavex[i], wavey[i]);
        }
        endShape();
    }
    else {
        beginShape();
        stroke(0, 255, 255);
        noFill();
        for(let i = 0; i < 25; i++){
            vertex(wavex[i], wavey[i]);
        }
        endShape();
        beginShape();
        stroke(255, 255, 255, 150);
        noFill();
        for(let i = 24; i < wavex.length; i++){
            vertex(wavex[i], wavey[i]);
        }
        endShape();
    }

    push();
    stroke(255, 255, 255, 50);
    translate(650, 0);
    beginShape();
    line(wavex[0] - 650, wavey[0], 0, wavey[0]);
    //ellipse(0, wavey[0], 10);
    stroke(0, 255, 0);
    for(let i = 0; i < wavey.length; i++){
        vertex(i, wavey[i]);
    }
    endShape();
    pop();
   

    //time += 0.008;
    time += 0.03;
    if (wavex.length > wavel) {
        wavex.pop();
        wavey.pop();
    }
}

function drawCircle(){
}


