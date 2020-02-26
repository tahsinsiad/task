function movingBox() {
	var elem = document.getElementById("moving-box");
	var targetPx = 50;
	var pos = 0;
	var reversePos = window.innerHeight - 100 ;
	setInterval(
		function(){
			if (pos >= window.innerHeight - 100) {
				reversePos = reversePos - targetPx;
				elem.style.top = reversePos + 'px'; 
				elem.style.left = reversePos + 'px';
				if(reversePos <= 0) {
					pos = 0;
					reversePos = window.innerHeight - 100;
				}
			} else {
				pos = pos + targetPx;
				elem.style.top = pos + 'px'; 
				elem.style.left = pos + 'px'; 
			}
		}, 200)
  }

  function changeBgColor() {
	  var elem = document.getElementById("moving-box");
	  var colors = ["#43a7e0", "#de1818", "#25de18"];
	  var index = 0;
	  setInterval(function(){
		  elem.style.background = colors[index++];
		  if(index > colors.length){
			  index=0;
		  }
	  }, 3000)
  }
