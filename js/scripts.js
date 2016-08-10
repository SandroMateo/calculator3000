var add = function(number1, number2) {
	return number1 + number2;
};
var subtract = function(number1, number2) {
	return number1 - number2;
};
var multiply = function(number1, number2) {
	return number1 * number2;
};
var divide = function(number1, number2) {
	return number1 / number2;
};
var remainder = function(number1, number2) {
	return number1 % number2;
};
var BMI = function(weight, height) {
	return weight / height;
};
var tempC2F = function(celsius) {
	return celsius * 9 / 5 + 32 ;
};
var tempF2C = function(fahrenheit) {
	return (fahrenheit - 32) * 5 / 9;
};
var converterG2L = function(gallons) {
	return gallons * 3.78541;
};
var converterL2G = function(liters) {
	return liters / 3.78541;
};

$(function() {
	// calculator functions
	$("#add-btn").click(function(event) {
		var number1 = parseInt($("#num1").val());
		var number2 = parseInt($("#num2").val());
		var output = add(number1,number2);
		$("#calculator-output").text(output);
		$("#calculator-output").show();
		event.preventDefault();
	});
	$(".btn-warning").click(function(event) {
		var number1 = parseInt($("#num1").val());
		var number2 = parseInt($("#num2").val());
		var output = subtract(number1,number2);
		$("#calculator-output").text(output);
		$("#calculator-output").show();
		event.preventDefault();
	});
	$(".btn-primary").click(function(event) {
		var number1 = parseInt($("#num1").val());
		var number2 = parseInt($("#num2").val());
		var output = multiply(number1,number2);
		$("#calculator-output").text(output);
		$("#calculator-output").show();
		event.preventDefault();
	});
	$(".btn-danger").click(function(event) {
		var number1 = parseInt($("#num1").val());
		var number2 = parseInt($("#num2").val());
		var output = divide(number1,number2);
		var modulo = remainder(number1, number2);
		if (modulo > 0) {
			$("#calculator-output").text(Math.floor(output) + " r" + modulo);
		} else {
			$("#calculator-output").text(Math.floor(output));
		}
		$("#calculator-output").show();
		event.preventDefault();
	});
	// converter functions
	$("#converter-btn").click(function(event) {
    var quantity = parseInt($("#input1").val());
    var unit = $("input:checked").val();
    var output = 0;
    if(unit === "gal") {
      output = converterG2L(quantity);
      unit = "L";
    } else if (unit === "L") {
      output = converterL2G(quantity);
      unit = "gal";
    } else if (unit === "C") {
      output = tempC2F(quantity);
      unit = "F";
    } else {
      output = tempF2C(quantity);
      unit = "C";
    }
    $("#converter-output").text(output.toFixed(4) + " " + unit);
		$("#converter-output").show();
    event.preventDefault();
  });
});
