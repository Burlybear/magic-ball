 $(document).ready(function() {

 	var one = ["1"]
 	var two = ["2"]
 	var three = ["3"]
 	var four = ["4"]
 	var five = ["5"]
 	var six = ["6"]
 	var seven = ["7"]
 	var eight = ["8"]
 	var nine = ["9"]
 	var ten = ["10000"]
 	var eleven = ["11"]
 	var twelve = ["12"]

	var today = new Date();
	var h = today.getHours();
	var day = today.getDay();
	var l = [];
	var c =0;

	$("button").click(function(){
		if(c==4){
			$("h2").text("");
			var t = { one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve }
			var keys = Object.keys( t );

  			var name = keys[ Math.floor(Math.random()*keys.length) ];

 		 	var item = t[ name ];
			l=item;
			var computerChoice = l[Math.floor(Math.random() * l.length)];
			$("h2").text(computerChoice)
			c=c+1;
			// console.log(l);
			// console.log(c);
			h = today.getHours();
			day = today.getDay();
		}else if (h==12 && day == 0 || h==1 && day==1 || h==2 && day==2 || h==3 &&day==3 || h==4 && day==4 || h==5 && day==5 || h==6 && day==6){
			$("h2").text("");
			l=one;
			var computerChoice = l[Math.floor(Math.random() * l.length)];
			$("h2").text(computerChoice)
			c=c+1;
			// console.log(l);
			// console.log(c);
			h = today.getHours();
			day = today.getDay();
		}else if (h==1 && day == 0 || h==2 && day==1 || h==3 && day==2 || h==4 &&day==3 || h==5 && day==4 || h==6 && day==5 || h==7 && day==6){
			$("h2").text("");
			l=two;
			var computerChoice = l[Math.floor(Math.random() * l.length)];
			$("h2").text(computerChoice)
			c=c+1;
			// console.log(l);
			// console.log(c);
			h = today.getHours();
			day = today.getDay();
		}else if (h==2 && day == 0 || h==3 && day==1 || h==4 && day==2 || h==5 &&day==3 || h==6 && day==4 || h==7 && day==5 || h==8 && day==6){
			$("h2").text("");
			l=three;
			var computerChoice = l[Math.floor(Math.random() * l.length)];
			$("h2").text(computerChoice)
			c=c+1;
			// console.log(l);
			// console.log(c);
			h = today.getHours();
			day = today.getDay();
		}else if (h==3 && day == 0 || h==4 && day==1 || h==5 && day==2 || h==6 &&day==3 || h==7 && day==4 || h==8 && day==5 || h==9 && day==6){
			$("h2").text("");
			l=four;
			var computerChoice = l[Math.floor(Math.random() * l.length)];
			$("h2").text(computerChoice)
			c=c+1;
			// console.log(l);
			// console.log(c);
			h = today.getHours();
			day = today.getDay();
		}else if (h==4 && day == 0 || h==5 && day==1 || h==6 && day==2 || h==7 &&day==3 || h==8 && day==4 || h==9 && day==5 || h==10 && day==6){
			$("h2").text("");
			l=five;
			var computerChoice = l[Math.floor(Math.random() * l.length)];
			$("h2").text(computerChoice)
			c=c+1;
			// console.log(l);
			// console.log(c);
			h = today.getHours();
			day = today.getDay();
		}else if (h==5 && day == 0 || h==6 && day==1 || h==7 && day==2 || h==8 &&day==3 || h==9 && day==4 || h==10 && day==5 || h==11 && day==6){
			$("h2").text("");
			l=six;
			var computerChoice = l[Math.floor(Math.random() * l.length)];
			$("h2").text(computerChoice)
			c=c+1;
			// console.log(l);
			// console.log(c);
			h = today.getHours();
			day = today.getDay();
		}else if (h==6 && day == 0 || h==7 && day==1 || h==8 && day==2 || h==9 &&day==3 || h==10 && day==4 || h==11 && day==5 || h==12 && day==6){
			$("h2").text("");
			l=seven;
			var computerChoice = l[Math.floor(Math.random() * l.length)];
			$("h2").text(computerChoice)
			c=c+1;
			// console.log(l);
			// console.log(c);
			h = today.getHours();
			day = today.getDay();
		}else if (h==7 && day == 0 || h==8 && day==1 || h==9 && day==2 || h==10 &&day==3 || h==11 && day==4 || h==12 && day==5 || h==1 && day==6){
			$("h2").text("");
			l=eight;
			var computerChoice = l[Math.floor(Math.random() * l.length)];
			$("h2").text(computerChoice)
			c=c+1;
			// console.log(l);
			// console.log(c);
			h = today.getHours();
			day = today.getDay();
		}else if (h==8 && day == 0 || h==9 && day==1 || h==10 && day==2 || h==11 &&day==3 || h==12 && day==4 || h==1 && day==5 || h==2 && day==6){
			$("h2").text("");
			l=nine;
			var computerChoice = l[Math.floor(Math.random() * l.length)];
			$("h2").text(computerChoice)
			c=c+1;
			// console.log(l);
			// console.log(c);
			h = today.getHours();
			day = today.getDay();
		}else if (h==9 && day == 0 || h==10 && day==1 || h==11 && day==2 || h==12 &&day==3 || h==1 && day==4 || h==2 && day==5 || h==3 && day==6){
			$("h2").text("");
			l=ten;
			var computerChoice = l[Math.floor(Math.random() * l.length)];
			$("h2").text(computerChoice)
			c=c+1;
			// console.log(l);
			// console.log(c);
			h = today.getHours();
			day = today.getDay();
		}else if (h==10 && day == 0 || h==11 && day==1 || h==12 && day==2 || h==1 &&day==3 || h==2 && day==4 || h==3 && day==5 || h==4 && day==6){
			$("h2").text("");
			l=eleven;
			var computerChoice = l[Math.floor(Math.random() * l.length)];
			$("h2").text(computerChoice)
			c=c+1;
			// console.log(l);
			// console.log(c);
			h = today.getHours();
			day = today.getDay();
		}else if (h==11 && day == 0 || h==12 && day==1 || h==1 && day==2 || h==2 &&day==3 || h==3 && day==4 || h==4 && day==5 || h==5 && day==6){
			$("h2").text("");
			l=twelve;
			var computerChoice = l[Math.floor(Math.random() * l.length)];
			$("h2").text(computerChoice)
			c=c+1;
			// console.log(l);
			// console.log(c);
			h = today.getHours();
			day = today.getDay();
		}
	})

})