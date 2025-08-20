function bulbOn() {
  document.getElementById("myImage").src = "img/bulbon.gif";
}

function bulbOff() {
  document.getElementById("myImage").src = "img/bulboff.gif";
}

function convertToDollar() {
  var Dollar = document.getElementById("dollar").value;
  var result = document.getElementById("result");
 
  if (Dollar == "") {
    result.innerHTML = "plz Enter a value";
    return false;
  } else if (Dollar < 0) {
    result.innerHTML = "plz Enter a psitive number";
    return false;
  } else if (Dollar == 0) {
    result.innerHTML = "Enter number rether than zero";
    return false;
  } else {
    result.innerHTML = Dollar * 50 + " Egyption pound";
    return false;
  }
}
