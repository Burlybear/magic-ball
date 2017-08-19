 $(document).ready(function() {

 	{
 		var one = ["Coming events cast their shadows before them", "Every man has his hobby horse", "A friend to everybody is a friend to nobody", "A straight foot is not afraid of a crooked shoe", "All things are difficult before they are easy", "Opportunity knocks at the door only once", "Everything is small except the east wind", "small as it is, the sparrow has all vital organs", "Where ignorance is bliss, it is folly to be wise", "A thousand step journey is started with  a single step", "a person can do no more than they can" ]
 		var two = ["As you wish", "Frankly my dear, I don't give a dam", "There can only be 1", "As if!", "Just when I thought I was out, they pulled me back in!", "Nobody's perfect", "Go ahead, make my day", "Pay no atention to the man behind the curtain", "Just keep swimming", "Run, Forest run!", "What we've got is a failure to communicate", "Roads? Where we are going, we don't need any roads"]
	 	var three = ["Fasten your seatbelts, it's going to be a bumpy ride", "Carpe diem. Sieze the day boys!", "Their's no crying in baseball", "Leave the gun, take the cannoli", "Houstin, we have a problem", "To infinity and beyond", "You can't handle the truth", "You talkin' to me", "You are going to need a bigger boat", "You cannot keep bumping your head against reality and saying it is not their", "We all go a little mad sometimes", "Insanity runs in my family. It practically gallops"]
 		var four = ["sometimes angels rush in where fools fear to tread", "It is not the stars to hold our destiny, but in ourselves", "There is nothing good or bad but the thing making it so", "Cowards die many times before their deaths; the valaint never taste death but once", "Some are born great, some acheive greatness, and some have greatness thrust upon them", "Hell is empty and all the devils are here", "This above all else: to thy own true self be true", "Better three minutes to soon then a minute too late", "Like as the waves make twards the pebbl'd shore, so do our minutes hasten to the end", "We are such such stuff as our dreams are made on, and our little life is rounded with sleep", "I say there is no darkness but ignorance", "Let me embrace thee sour adversity for wise men say it is the wisest course"]
 		var five = ["Brevity is the soul of wit", "With mirth and laughter let wrinkles come", "In time we hate that which we often fear", "nothing can come of nothing", "Fortune brings in some boats that are not steered", "What is done can't be undone", "I am not bound to please thee with my answer", "Neither a borrower nor lender be", "", "", "", ""]
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
	}

	function execute(){
		var computerChoice = l[Math.floor(Math.random() * l.length)];
		$("h2").text(computerChoice)
		c=c+1;
		console.log(computerChoice);
		console.log(c);
		h = today.getHours();
		day = today.getDay();
	}

		$("button").click(function(){
			if (h > 12){
				h=h-12
				return h;
			}

			if(c>=4){
				$("h2").text("");
				var t = { one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve }
				var keys = Object.keys( t );

  				var name = keys[ Math.floor(Math.random()*keys.length) ];

 		 		var item = t[ name ];
				l=item;
				execute()
			}else if (h==12 && day == 0 || h==1 && day==1 || h==2 && day==2 || h==3 &&day==3 || h==4 && day==4 || h==5 && day==5 || h==6 && day==6){
				$("h2").text("");
				l=one;
				execute()
				day = today.getDay();
			}else if (h==1 && day == 0 || h==2 && day==1 || h==3 && day==2 || h==4 &&day==3 || h==5 && day==4 || h==6 && day==5 || h==7 && day==6){
				$("h2").text("");
				l=two;
				execute()
			}else if (h==2 && day == 0 || h==3 && day==1 || h==4 && day==2 || h==5 &&day==3 || h==6 && day==4 || h==7 && day==5 || h==8 && day==6){
				$("h2").text("");
				l=three;
				execute()
			}else if (h==3 && day == 0 || h==4 && day==1 || h==5 && day==2 || h==6 &&day==3 || h==7 && day==4 || h==8 && day==5 || h==9 && day==6){
				
				$("h2").text("");
				l=four;
				execute()
			}else if (h==4 && day == 0 || h==5 && day==1 || h==6 && day==2 || h==7 &&day==3 || h==8 && day==4 || h==9 && day==5 || h==10 && day==6){
				
				$("h2").text("");
				l=five;
				execute()
			}else if (h==5 && day == 0 || h==6 && day==1 || h==7 && day==2 || h==8 &&day==3 || h==9 && day==4 || h==10 && day==5 || h==11 && day==6){
				
				$("h2").text("");
				l=six;
				execute()
			}else if (h==6 && day == 0 || h==7 && day==1 || h==8 && day==2 || h==9 &&day==3 || h==10 && day==4 || h==11 && day==5 || h==12 && day==6){
				
				$("h2").text("");
				l=seven;
				execute()
			}else if (h==7 && day == 0 || h==8 && day==1 || h==9 && day==2 || h==10 &&day==3 || h==11 && day==4 || h==12 && day==5 || h==1 && day==6){
				
				$("h2").text("");
				l=eight;
				execute()
			}else if (h==8 && day == 0 || h==9 && day==1 || h==10 && day==2 || h==11 &&day==3 || h==12 && day==4 || h==1 && day==5 || h==2 && day==6){
				
				$("h2").text("");
				l=nine;
				execute()
			}else if (h==9 && day == 0 || h==10 && day==1 || h==11 && day==2 || h==12 &&day==3 || h==1 && day==4 || h==2 && day==5 || h==3 && day==6){
				
				$("h2").text("");
				l=ten;
				execute()
			}else if (h==10 && day == 0 || h==11 && day==1 || h==12 && day==2 || h==1 &&day==3 || h==2 && day==4 || h==3 && day==5 || h==4 && day==6){
				
				$("h2").text("");
				l=eleven;
				execute()
			}else if (h==11 && day == 0 || h==12 && day==1 || h==1 && day==2 || h==2 &&day==3 || h==3 && day==4 || h==4 && day==5 || h==5 && day==6){
				
				$("h2").text("");
				l=twelve;
				execute()
			}
		})

})