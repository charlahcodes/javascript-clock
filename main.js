(function () {

var intervalID = window.setInterval(function displayClock() {
  
  var newDate = new Date();
  var hours = newDate.getHours();
  var minutes = newDate.getMinutes();
  var seconds = newDate.getSeconds();

  if (hours < 10) {
    hours = "0" + hours;
  };

  if (minutes < 10) {
    minutes = "0" + minutes;
  };

  if (seconds < 10) {
    seconds = "0" + seconds;
  };

  var time = "#" + hours + '' + minutes + '' + seconds;
  $('#clock').text(time);

  $("body").css("background-color", time);

}, 1000);


})();
