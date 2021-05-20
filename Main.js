function preload() {

}

function setup() {
    NotArthu=createCapture(VIDEO);
    NotArthu.size(550,525);
    NotArthu.position(25,50);
    canvas=createCanvas(550,425);
    canvas.position(700,95);
    posenet=ml5.poseNet(NotArthu,modelLoaded);
    posenet.on('pose',gotPoses);
}

function draw() {
    background("blue")
}

function modelLoaded() {
    console.log("PoseNet Has Been Initialized")
}

function gotPoses(results) {
    if(results.length>0) {
        console.log(results);
    }
}
