function calFunction(){
    var totalVolume = document.getElementById('total-volume').value;
    var drumRadius = document.getElementById('drum-radius').value;
    var meaHeight = document.getElementById('measured-height').value;
    var drumQty = document.getElementById('drum-quantity').value;

    var a = Math.PI;
    var b = Math.pow(drumRadius, 2);
    var c = meaHeight / 1000;
    var d = totalVolume * drumQty;
    var z = 3.1429;

    var volumeLeft = (a * b * c) + d;
    var volumeLeft2 = (z * b * c) + d;
    document.getElementById('volume-left').innerHTML = volumeLeft.toFixed(2) + " [" + volumeLeft2.toFixed(2) + "] Liter";
}