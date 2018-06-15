$(window).load(function(){

	function aleatorio(inferior,superior){
    var numPosibilidades = superior - inferior
    var aleat = Math.random() * numPosibilidades
    aleat = Math.round(aleat)
    return parseInt(inferior) + aleat
	} 

	$("#play").click(function(){
		$(".box_verbs li").removeClass("title_blue");
		$(".box_theme li").removeClass("title_red");

		$(".modal").fadeIn("fast");
		$(".box_charger").fadeIn("fast");
		setTimeout(function(){
		$(".modal").fadeOut("fast");
		$(".box_charger").fadeOut("fast");
		},2000);

		setTimeout(function(){
			var aleatorio1 = aleatorio(1,15);
		var aleatorio2 = aleatorio(1,3);

		switch(aleatorio1){
			case 1:
				$("#1").addClass('title_blue');
				break;
			case 2:
				$("#2").addClass('title_blue');
				break;
			case 3:
				$("#3").addClass('title_blue');
				break;
			case 4:
				$("#4").addClass('title_blue');
				break;
			case 5:
				$("#5").addClass('title_blue');
				break;
			case 6:
				$("#6").addClass('title_blue');
				break;
			case 7:
				$("#7").addClass('title_blue');
				break;
			case 8:
				$("#8").addClass('title_blue');
				break;
			case 9:
				$("#9").addClass('title_blue');
				break;
			case 10:
				$("#10").addClass('title_blue');
				break;
			case 11:
				$("#11").addClass('title_blue');
				break;
			case 12:
				$("#12").addClass('title_blue');
				break;
			case 13:
				$("#13").addClass('title_blue');
				break;
			case 14:
				$("#14").addClass('title_blue');
				break;
			case 15:
				$("#15").addClass('title_blue');
				break;
		}

		switch(aleatorio2){
			case 1:
				$("#a").addClass('title_red');
				break;
			case 2:
				$("#b").addClass('title_red');
				break;
			case 3:
				$("#c").addClass('title_red');
				break;
		}
		},1000)
		
	})

	
})