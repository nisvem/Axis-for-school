var x  = [6, 7, 8, 9];
var y  = [11, 12, 13, 14];
var randX = Math.floor(Math.random() * x.length);
var randY= Math.floor(Math.random() * y.length);
var a = x[randX];
var sum = y[randY];
var b = sum - a;

$("#a").html(a);
$("#b").html(b);

draw_spline(0, a);
input_n(1, 0, a, 1);

function draw_spline(x1, x2){
	var point1=39*x1+35;
	var point2=39*x2+35;
	var spline = "M" + point1 + ",137 Q" + ((point2-point1)/2+point1) + ", " + (137-(point2-point1)/2) + " " + point2 + ",136";

	var draw_path = document.createElementNS("http://www.w3.org/2000/svg", 'path');
		draw_path.setAttribute("d", spline);
		draw_path.setAttribute("fill", "transparent");
		draw_path.setAttribute("marker-end", "url(#pointer)");

	document.getElementById('myCanvas').appendChild(draw_path);
}

function input_n(n, x1, x2, k){
	var p1=39*x1+35;
	var p2=39*x2+35;

	var x=((p2-p1)/2+p1-(n-1)*50-19);
	var y=(137-(p2-p1)/4-10);
	var answerN="answer" + n;

	var insert_input=document.createElement("input");
		insert_input.setAttribute("class", "input");
		insert_input.setAttribute("type", "text");
		insert_input.setAttribute("maxlength", k);

	$(answerN).css('height', '40px');
	document.getElementById(answerN).appendChild(insert_input);
	document.getElementById(answerN).style.left = x + "px";
	document.getElementById(answerN).style.top = y + "px";
}

function answer3(){
	var insert_input=document.createElement("input");
		insert_input.setAttribute("class", "input");
		insert_input.setAttribute("type", "text");
		insert_input.setAttribute("maxlength", 2);

	$('#sum').animate( { 'opacity':'0'}, 500, function(){
			$('#sum').html('');
			document.getElementById('sum').appendChild(insert_input);
			$('#sum').animate({ 'opacity':'1'}, 500);
			$('#sum input').focus();
		} );	
}


$('#answer1 input').focus();

$(".input").keypress(function(e) {
	if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
		return false;
	}
});


$("#answer1").keyup(function(e){
 		$('#a').animate( { 'backgroundColor':''}, 200 );
 		$('#answer1 .input').animate( { 'color':'black'}, 200 );
	if($("#answer1 input").val() == a){
		draw_spline(a, sum);
		input_n(2, a, sum, 1);
		$('#a').animate( { 'backgroundColor':''}, 1000 );
		$('#answer2 input').focus();
		$('#answer1 .input').animate( { 'borderColor':''}, 1000, function(){
			$('#answer1').html(a);
		} );
	}else{
 		if($('#answer1 input').attr("maxlength") == $('#answer1 input').val().length){
	 		$('#a').animate( { 'backgroundColor':'#F7A846'}, 500 );
	 		$('#answer1 .input').animate( { 'color':'red'}, 500 );
	 	}
 	}
});

$("#answer2").keyup(function(e){
 		$('#b').animate( { 'backgroundColor':''}, 200 );
 		$('#answer2 .input').animate( { 'color':'black'}, 200 );
	if($("#answer2 input").val() == b){
		$('#b').animate( { 'backgroundColor':''}, 1000 );
		answer3();
		$('#answer2 .input').animate( { 'borderColor':''}, 1000, function(){
			$('#answer2').html(b);
		} );
	}else{
		if($('#answer2 input').attr("maxlength") == $('#answer2 input').val().length){
	 		$('#b').animate( { 'backgroundColor':'#F7A846'}, 500 );
	 		$('#answer2 .input').animate( { 'color':'red'}, 500 );
	 	}
 	}
});

$('#sum').keyup(function(){
	$('#sum input').animate( { 'color':'black'}, 200 );
	if($('#sum input').val() == sum){
		$('#sum input').blur();
		$('#sum input').animate( { 'borderColor':''}, 1000, function(){
			$('#sum').html(sum);
		} );
	}else{
		if($('#sum input').attr("maxlength") == $('#sum input').val().length){
			 $('#sum input').animate( { 'color':'red'}, 300 );	
		}
	}
});




