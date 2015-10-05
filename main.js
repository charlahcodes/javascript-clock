

var intervalID = window.setInterval(function displayClock() {
  var newDate = new Date();
  var hours = newDate.getHours();
  var minutes = newDate.getMinutes();
  var seconds = newDate.getSeconds();
  var time = hours + ":" + minutes + ":" + seconds;
  $('#clock').text(time);

}, 1000);

