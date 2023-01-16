Webcam.set({
    width:350,
    height:300,
    image_format:"jpg",
    jpg_quality:90
});

camera = document.getElementById("camera");
Webcam.attach("#camera");


function capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="selfie_image"  src="'+data_uri+'"/>' ;                                
    });
}

console.log("ml5version:",ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/K4WKG7HNv/model.json",modelLoaded);

function modelLoaded(){
    console.log('Model Loaded!');
}

function identify(){
    img = document.getElementById("selfie_image");
    classifier.classify(img, gotResult);
}

 prediction_1= "";
function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 =  prediction_1;
   
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 );
    synth.speak(utterThis);
}


function gotResult(error,results){
    if (error) {
        console.error(error);
    } else {
        console.log(results);
       
        prediction_1 = results[0].label;
       
        speak();
    }
}
