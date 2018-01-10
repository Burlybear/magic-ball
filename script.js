 $(document).ready(function() {

 	{
 		var one = ["Coming events cast their shadows before them", "Every man has his hobby horse", "A friend to everybody is a friend to nobody", "A straight foot is not afraid of a crooked shoe", "All things are difficult before they are easy", "Opportunity knocks at the door only once", "Everything is small except the east wind", "small as it is, the sparrow has all vital organs", "Where ignorance is bliss, it is folly to be wise", "A thousand step journey is started with a single step", "a person can do no more than they can" ];
 		var two = ["As you wish", "Frankly my dear, I don't give a dam", "There can only be 1", "As if!", "Just when I thought I was out, they pulled me back in!", "Nobody's perfect", "Go ahead, make my day", "Pay no atention to the man behind the curtain", "Just keep swimming", "Run, Forest run!", "What we've got is a failure to communicate", "Roads? Where we are going, we don't need any roads"];
	 	var three = ["Fasten your seatbelts, it's going to be a bumpy ride", "Carpe diem. Sieze the day boys!", "Their's no crying in baseball", "Leave the gun, take the cannoli", "Houstin, we have a problem", "To infinity and beyond", "You can't handle the truth", "You talkin' to me", "You are going to need a bigger boat", "You cannot keep bumping your head against reality and saying it is not their", "We all go a little mad sometimes", "Insanity runs in my family. It practically gallops"];
 		var four = ["sometimes angels rush in where fools fear to tread", "It is not the stars to hold our destiny, but in ourselves", "There is nothing good or bad but the thing making it so", "Cowards die many times before their deaths; the valaint never taste death but once", "Some are born great, some acheive greatness, and some have greatness thrust upon them", "Hell is empty and all the devils are here", "This above all else: to thy own true self be true", "Better three minutes to soon then a minute too late", "Like as the waves make twards the pebbl'd shore, so do our minutes hasten to the end", "We are such such stuff as our dreams are made on, and our little life is rounded with sleep", "I say there is no darkness but ignorance", "Let me embrace thee sour adversity for wise men say it is the wisest course"];
 		var five = ["Brevity is the soul of wit", "With mirth and laughter let wrinkles come", "In time we hate that which we often fear", "nothing can come of nothing", "Fortune brings in some boats that are not steered", "What is done can't be undone", "I am not bound to please thee with my answer", "Neither a borrower nor lender be", "I think you will find, When your death takes its toll, All the money you made, Will never by back your soul", "Don't let it bring you down. It's only castles burning. Find someone who's turning, and you will come around", "Somethings start before other things", "anyone with half a mind could see that"];
 		 		// Terry Prachett
 		var six = ["a unicorn is nothing more than a big horse that comes to a point", "sheep are not known for their conversation", "ye cannae just rush in anywhere. It looks bad, havin' to rush oout again straight awa'.", "no words can describe what a Feegle in a kilt looks like upside down, so they won't try", "people who say things like 'may all your dreams come true should try living in one for five minutes", "being right doesn't always work", "coming back to where you started is not the same as never leaving", "learnin' how not to do things is as hard as learning how to do them", "people don't alter history any more than birds alter the sky, they just make patterns in it", "'HUMANS NEED FANTASY TO BE HUMAN, TO BE THE PLACE WHERE THE FALLING ANGEL MEETS THE RISING APE.' -DEATH", "real stupidity beats artificial intelegence every time", "'HUMAN BEINGS MAKE LIFE SO INTRESTING. DO YOU KNOW, THAT IN A UNIVERSE SO FULL OF WORDERS THEY HAVE MANAGED TO INVENT BOREDOM.' -DEATH"];
 		var seven = ["somethings are fairly obvious when it is a seven foot tall skeleton telling you them", "'and what would humans be without love.''RARE', said DEATH", "perhaps it would be simpler if you just did what you're told and didn't try to understand things", "the truth isn't easily pinned to the page. In the bathtub of history the truth is harder to hold than the soap and much more difficult to find", "if failure hard no penalty, then success would not be a prize", "it is said that your life flashes before your eyes before you die. Thats true, it's called your life", "stories of immagination tend to upset ones without one", "wisdom comes from experience. Expirience is often a result of lack of wisdom", "its not worth doing unless someone, somewhere, would much rather you weren't doing it", "light thinks it travels faster than anything. no matter how fast light travels, it finds the darkness has always got there first, and is waiting for it", "i'll be more enthusiastic about encouraging thinking outside the box, when there is evidence of thinking going on inside the box."];
 		var eight = ["the presence of those seeking the truth is infinity perferable to the presenceof those who think they have found it", "history always has a great weight of inertia", "time is like a drug, to much of it kills you", "good one"];
	 	var nine = ["9"];
 		var ten = ["10000"];
 		var eleven = ["11"];
 		var twelve = ["12"];

 		// song lyrics
 		// terry prachet ,the we free men,
 		//brothers grim
 		//robotics

		var today = new Date();
		var h = today.getHours();
		var day = today.getDay();
		var l = [];
		var c =0;
	}

	function execute(){
		var computerChoice = l[Math.floor(Math.random() * l.length)];
		$("h2").text(computerChoice);
		c=c+1;
		console.log(computerChoice);
		console.log(c);
		h = today.getHours();
		day = today.getDay();
	}

		$("button").click(function(){
			if (h > 12){
				h=h-12;
				return h;
			}

			if(c>=4){
				$("h2").text("");
				var t = { one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve }
				var keys = Object.keys( t );

  				var name = keys[ Math.floor(Math.random()*keys.length) ];

 		 		var item = t[ name ];
				l=item;
				execute();
			}else if (h ===12 && day  === 0 || h ===1 && day ===1 || h ===2 && day ===2 || h ===3 &&day ===3 || h ===4 && day ===4 || h ===5 && day ===5 || h ===6 && day ===6){
				$("h2").text("");
				l=one;
				execute();
				day = today.getDay();
			}else if (h  ====1 && day  === 0 || h ===2 && day ===1 || h ===3 && day ===2 || h ===4 &&day ===3 || h ===5 && day ===4 || h ===6 && day ===5 || h ===7 && day ===6){
				$("h2").text("");
				l=two;
				execute();
			}else if (h ===2 && day  === 0 || h ===3 && day ===1 || h ===4 && day ===2 || h ===5 &&day ===3 || h ===6 && day ===4 || h ===7 && day ===5 || h ===8 && day ===6){
				$("h2").text("");
				l=three;
				execute();
			}else if (h ===3 && day  === 0 || h ===4 && day ===1 || h ===5 && day ===2 || h ===6 &&day ===3 || h ===7 && day ===4 || h ===8 && day ===5 || h ===9 && day ===6){
				
				$("h2").text("");
				l=four;
				execute();
			}else if (h ===4 && day  === 0 || h ===5 && day ===1 || h ===6 && day ===2 || h ===7 &&day ===3 || h ===8 && day ===4 || h ===9 && day ===5 || h ===10 && day ===6){
				
				$("h2").text("");
				l=five;
				execute();
			}else if (h ===5 && day  === 0 || h ===6 && day ===1 || h ===7 && day ===2 || h ===8 &&day ===3 || h ===9 && day ===4 || h ===10 && day ===5 || h ===11 && day ===6){
				
				$("h2").text("");
				l=six;
				execute();
			}else if (h ===6 && day  === 0 || h ===7 && day ===1 || h ===8 && day ===2 || h ===9 &&day ===3 || h ===10 && day ===4 || h ===11 && day ===5 || h ===12 && day ===6){
				
				$("h2").text("");
				l=seven;
				execute();
			}else if (h ===7 && day  === 0 || h ===8 && day ===1 || h ===9 && day ===2 || h ===10 &&day ===3 || h ===11 && day ===4 || h ===12 && day ===5 || h ===1 && day ===6){
				
				$("h2").text("");
				l=eight;
				execute();
			}else if (h ===8 && day  === 0 || h ===9 && day ===1 || h ===10 && day ===2 || h ===11 &&day ===3 || h ===12 && day ===4 || h ===1 && day ===5 || h ===2 && day ===6){
				
				$("h2").text("");
				l=nine;
				execute();
			}else if (h ===9 && day  === 0 || h ===10 && day ===1 || h ===11 && day ===2 || h ===12 &&day ===3 || h ===1 && day ===4 || h ===2 && day ===5 || h ===3 && day ===6){
				
				$("h2").text("");
				l=ten;
				execute();
			}else if (h ===10 && day  === 0 || h ===11 && day ===1 || h ===12 && day ===2 || h ===1 &&day ===3 || h ===2 && day ===4 || h ===3 && day ===5 || h ===4 && day ===6){
				
				$("h2").text("");
				l=eleven;
				execute();
			}else if (h ===11 && day  === 0 || h ===12 && day ===1 || h ===1 && day ===2 || h ===2 &&day ===3 || h ===3 && day ===4 || h ===4 && day ===5 || h ===5 && day ===6){
				
				$("h2").text("");
				l=twelve;
				execute();
			}
		})

})