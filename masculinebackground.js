var timer = 0;
var timeLimit = 100;
var img;
var ind = 0;

function preload(){
  img = [];

}

function setup(){
  createCanvas(window.innerWidth, window.innerHeight);
  background(255);
}

function draw(){
  if(timer > timeLimit){ nextImg();}
  background(img[ind]);
  timer++;
}

function nextImg(){
  ind++;
  if(ind >= img.length){
    inf = 0;
  }
  timer = 0;
}
