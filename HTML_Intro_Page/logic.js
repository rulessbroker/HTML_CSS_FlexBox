function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("Car1")) {
        image.src = "Resources/Car.jpg";
    }
    else {
        image.src = "Resources/Car1.jpg";
    }
}