var now = new Date();
var theHr = now.getHours();
var theMin = now.getMinutes();
var theSec = now.getSeconds();
document.write("Time: " + theHr + ":" + theMin + ":" + theSec);

document.write("</br>");
document.write("</br>");

function tellTime() {
  var now = new Date();
  var theHr = now.getHours();
  var theMin = now.getMinutes();
  var theSec = now.getSeconds();
  document.write("Current time: " + theHr + ":" + theMin + ":" + theSec);
}

tellTime();
