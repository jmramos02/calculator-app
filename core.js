function compute(){
	var num1 = document.getElementById("num-1").value;
	var num2 = document.getElementById("num-2").value;

	var operator = document.getElementById("operator").value;
	var answer = document.getElementById("answer");
	if(operator == "1"){
		answer.innerHTML = "Your Answer is: " + (parseInt(num1) + parseInt(num2));
	}else if(operator == "2"){
		answer.innerHTML = "Your Answer is: " +  (parseInt(num1) - parseInt(num2));
	}else if(operator == "3"){
		answer.innerHTML = "Your Answer is: " +  (parseInt(num1) * parseInt(num2));
	}else{
		answer.innerHTML = "Your Answer is: " + (parseInt(num1) / parseInt(num2));
	}

	//alert(parseInt(num1) + parseInt(num2));
}