 $(document).ready(function() {
 	function checkTime(i) {
	  if (i < 10) {
	    i = "0" + i;
	  }
	  return i;
	}

	var today = new Date();
	var h = today.getHours();
	var day = today.getDay();

	$("button").click(function(){
		if (h==12){
			alert("ok: " + day);
		}
	})
})
