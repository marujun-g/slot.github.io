var images = ["image1.jpg", "image2.jpg", "image3.jpg"];
var spinButton = document.getElementById("spin-button");
spinButton.addEventListener("click", spin);

function spin() {
  var slot1 = document.getElementById("slot1");
  var slot2 = document.getElementById("slot2");
  var slot3 = document.getElementById("slot3");
  var result = document.getElementById("result");
  
  var index1 = Math.floor(Math.random() * images.length);
  var index2 = Math.floor(Math.random() * images.length);
  var index3 = Math.floor(Math.random() * images.length);
  
  var i = 0;
  var interval = setInterval(function() {
    i++;
    if (i > 10) {
      clearInterval(interval);
      slot1.src = images[index1];
      slot2.src = images[index2];
      slot3.src = images[index3];

      if (index1 === index2 && index2 === index3) {
        result.innerHTML = "当たり！";
      } else {
        result.innerHTML = "はずれ";
      }
    } else {
      slot1.src = images[Math.floor(Math.random() * images.length)];
      slot2.src = images[Math.floor(Math.random() * images.length)];
      slot3.src = images[Math.floor(Math.random() * images.length)];
    }
  }, 100);
}
