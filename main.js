img="";
status="";
object=[]

function preload(){
    imgloadimage('dog_cat.jpg');
}

function setUp(){
    canvas=createCanvas (380,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(380,380);
    objetDetector=ml5.objetDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="status:Detectando objetos";
    video.height();
}

function modelLoaded(){
    console.log("¡Modelo cargado!");
    status=true;
    objetDetector.detect(video,gotResult);
}

function gotResults(error,results){
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects=results;
}

function draw(){
    image(video,0,0,380,380);

    if (status !="") {
        r=random(255);
        g=random(255);
        b=random(255);
        objetDetector.detect(video,gotResults)
    
    for (i=0; i<objects.length, i++){
        document.getElementById("status").innerHTML="status:objeto detectado";
        
        fill("cyan");
        porcent=floor(objects[i].confidence*100);
        text(objects[i].label+""+porcent+"%",objects[i].x,objects[i].y);
        noFill();
        stroke("cyan");
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
    }
  }
}

