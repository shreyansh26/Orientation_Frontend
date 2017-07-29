$(document).ready(function() {
  var ht = $("#header").height();
  $("#iitbhu").height(ht);
  $("#iitbhu").width(ht);
  $("#cops").height(ht);
  $("#cops").width(ht);
});

var then = new Date().getTime();
var minutes, seconds;
// Update the count down every 1 second
var x = setInterval(function() {

  var now = new Date().getTime();
  var distance = now - then;
  // Time calculations for days, hours, minutes and seconds
  minutes = Math.floor((distance) / (1000 * 60));
  seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="timer"
  document.getElementById("timer").innerHTML = (seconds<10)?minutes+":0"+seconds: minutes+":"+seconds;
}, 1000);

function validate() {
    var radioError = checkRadio();

    if (radioError) {
      document.frmOne.submit();
    }
    else {
      return false;
    }
  }
function checkRadio() {
  var headphone = "";
  var len = document.frmOne.option.length;
  var i;

  for (i = 0; i < len; i++) {
    if (document.frmOne.option[i].checked) {
      headphone = document.frmOne.option[i].value;
      break;
    }
  }

  console.log(headphone);
  console.log(minutes*60+seconds);

  $.ajax(
    {url: "",
    type: "POST",
    data: {answer: "headphone", time: minutes*60+seconds},
    dateType: 'json',
    success: function(result) {
      console.log("Received!!");
    }
  });
}
