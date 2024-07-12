prediction_1 ="";
prediction_2 ="";

Webcam.set({
    height:340,
    width:340,
    image_foramt:'png',
    png_quality:100
});
Webcam.attach('#cam')

function take_snap(){
    Webcam.snap(function (data_uri){
    document.getElementById("view").innerHTML = '<img id = "captured_image" src="'+data_uri+'"></img>';
    });
}
console.log("ml5 Version", ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/gegsp8XwE/model.json',modelLoded)

function model_loded(){
    console.log("model loaded !");
}
 function check(){
    img=document.getElementById("captured_image")
    classifier.classify(img,got_result)
 }

function got_result(error,results){
    if (error){
        console.log(error)
    }
    else {
  document.getElementById("name1").innerHTML= results[0].label
  document.getElementById("name2").innerHTML= results[1].label
 prediction_1 = results[0].label
 prediction_2 = results[1].label

if (results[0].label == "best"){
    document.getElementById("emoji1").innerHTML ="&#128077";
}
if (results[0].label == "amazing"){
    document.getElementById("emoji1").innerHTML ="&#128076";
}
if (results[0].label == "victory"){
    document.getElementById("emoji1").innerHTML ="&#9996";
}

if (results[1].label == "best"){
    document.getElementById("emoji2").innerHTML ="&#128544";
}
if (results[1].label == "amazing"){
    document.getElementById("emoji2").innerHTML ="&#128542";
}
if (results[1].label == "victory"){
    document.getElementById("emoji2").innerHTML ="&#128544";
}
}
} 