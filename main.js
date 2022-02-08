function preload(){
}

function setup(){
    canvas = createCanvas(640,480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "cyan";
}

function draw(){
    image(video,175,120,320,240);
    fill(0,255,255);
    circle(60, 60, 80);
    circle(580, 60, 80);
    circle(60, 430, 80);
    circle(580, 430, 80);
    fill(179,147,243);
    rect(33, 90, 55, 310);
    rect(553, 90, 55, 310);
    rect(88, 30, 465, 55);
    rect(88, 400, 465, 55);
    tint(tint_color);
}

function take_snapshot(){
    save("gautam.png")
}