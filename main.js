Webcam.set({
    width:350,
    heigth:300,
    image_format: 'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.take_snapshot(function(data_uri){
        document.getElementById("result"),innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/0rKDpa8RO/');

function modelLoaded() {
    console.log('Model Loaded');
}

function check() {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_image_name").innerHTML = results[0].label;
        document.getElementById("result_image_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}