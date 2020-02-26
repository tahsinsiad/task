var movingObj = document.getElementById("moving");
document.getElementById("moving").style.left='0px';
document.getElementById("moving").style.top='0px';
setInterval(function() {	
	document.getElementById("moving").style.left = parseInt(document.getElementById("moving").style.left)+50 +'px';
	document.getElementById("moving").style.top = parseInt(document.getElementById("moving").style.top)+50 +'px';
}, 1000)