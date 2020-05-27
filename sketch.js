var model;
var video;
var loaded;

function setup(){
  createCanvas(800,600);
 mobilenet.load() .then(modelLoaded);  
 
  video =createCapture(VIDEO);
  video.size(800,600);
  video.hide();
        createButton("Take a picture").mousePressed(btnClicked);
}

function classifyDone(res) {
  print(res);
 
  if (res[0].className == "pelican") {
    print(" this is an endangered species, do you want to report it?");
  }
}

function modelLoaded(net) {
model  =net;
loaded =true;
print("Model loaded");

}

  function btnClicked() {
 image (video, 0 ,0 , 800, 600);
   if (loaded == true) {
  model.classify(video.elt).then(classifyDone);

   }
 }


