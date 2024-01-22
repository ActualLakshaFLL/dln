function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

}

function draw(){
    image(video, 0, 0, 640, 480);
    
    fill("blue");
    stroke("red");
    rect(78, 50, 500, 10);
    fill("blue");
    stroke("red");
    rect(78, 400, 500, 10);
    fill("blue");
    stroke("red");
    rect(50, 50, 10, 400);
    fill("blue");
    stroke("red");
    rect(600, 50, 10, 400);

    fill("teal");
    stroke("yellow");
    circle(50, 430, 80);
    fill("darkorange");
    stroke("green");
    circle(600, 400, 75);
    fill("fuchsia");
    stroke("aliceblue");
    circle(50, 50, 75);
    fill("crimson");
    stroke("lime");
    circle(600, 50, 75);
   
    
    
}


function take_snapshot(){
    save('laksh.png');
}