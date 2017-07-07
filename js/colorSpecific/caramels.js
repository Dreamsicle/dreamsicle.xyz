function randColor() {
	var colors = ['#ffbc42', '#e67216', '#ffe1a8']
	return colors[Math.floor(Math.random() * colors.length)]
}

function randString() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_+=`~\|][{}';/<>.,/";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

var pattern = GeoPattern.generate(randString(), {color: randColor()})

document.getElementById("header").style.backgroundImage = pattern.toDataUrl()

window.setInterval(function () {
var pattern = GeoPattern.generate(randString(), {color: randColor()})

$('.patternBG').css('background-image', pattern.toDataUrl())
}, 508.474576271);

$('.accentBG').css('background-color', '#ffbc42')
$('.accentColor').css('color', '#ffbc42')
$('.card').css('background-color', '#ffbc42')