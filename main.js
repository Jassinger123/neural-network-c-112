Webcam.set({
    width:350,
    height:300,
    image_format:'png',
png_quality:90
});

camera=document.getElementById("camera");

Webcam.attach('#camera');

function take_pic(){
    Webcam.snap(function (data_uri){
        document.getElementById("snapshot").innerHTML='<img id="img_1" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:',ml5.version);
model=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/7se-1Fsqe/model.json',modelloaded);

function modelloaded(){
    console.log("Model Loaded!!")
}

function speak(){
    var synth=window.speechSynthesis;
speak_data1="Predection 1 is"+predection1;
speak_data2="And Predection 2 is"+predection2;
speach_data=new SpeechSynthesisUtterance(speak_data1+speak_data2);
console.log(speach_data);
synth.speak(speach_data);
}

function compare(){
    img= document.getElementById("img_1");
    model.classify(img,got_results);
}

function got_results(error,results){
if (error) {
    console.error(error);
}
else{
    console.log(results);
    document.getElementById("emotion_para").innerHTML=results[0].label;
    document.getElementById("emotion_para2").innerHTML=results[1].label;
    predection1=results[0].label;
    predection2=results[1].label;
    speak();
    if (predection1=="happy") {
        document.getElementById("emotion_emoji").innerHTML="&#128522;";
    }

    if (predection1=="sad") {
        document.getElementById("emotion_emoji").innerHTML="&#128532;";
    }
    if (predection1=="angry") {
        document.getElementById("emotion_emoji").innerHTML="&#128548;";
    }

    if (predection2=="happy") {
        document.getElementById("emotion_emoji").innerHTML="&#128522;";
    }

    if (predection2=="sad") {
        document.getElementById("emotion_emoji").innerHTML="&#128532;";
    }
    if (predection2=="angry") {
        document.getElementById("emotion_emoji").innerHTML="&#128548;";
    }
}


}


