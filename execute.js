var password = "lone_tomato";

function passcheck () {
if(document.getElementById('lone_tomato').value != password) {
alert('Wrong Tomato');
return false;
}

  if(document.getElementById('lone_tomato').value == password) {
alert('Correct Tomato');
}
