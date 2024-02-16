noseX=0;
noseY=0;

function preload(){
gato = loadImage('https://i.postimg.cc/T35Nv1JQ/png-clipart-gray-cat-face-illustration-removebg-preview.png');
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet foi incializado');
}

function gotPoses(results){
    if(results.length > 0){
        noseX= results[0].pose.nose.x;
        noseY= results[0].pose.nose.y;
        console.log("nariz x = " + noseX);
        console.log("nariz y = " + noseY);
    }
}


function draw(){
image(video, 0, 0, 300, 300);
image(gato, noseX-120, noseY-160, 250, 250);
}

function takeSnapshot(){
    save('myFilterImage.png');
}