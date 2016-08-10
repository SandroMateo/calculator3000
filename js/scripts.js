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

	$(".btn-success").click(function(event) {
		var number1 = parseInt($("#num1").val());
		var number2 = parseInt($("#num2").val());
		var output = add(number1,number2);

		$("#output").prepend("<li>" + output + "</li>");

		event.preventDefault();
	});

	$(".btn-warning").click(function(event) {
		var number1 = parseInt($("#num1").val());
		var number2 = parseInt($("#num2").val());
		var output = subtract(number1,number2);

		$("#output").prepend("<li>" + output + "</li>");

		event.preventDefault();
	});

	$(".btn-primary").click(function(event) {
		var number1 = parseInt($("#num1").val());
		var number2 = parseInt($("#num2").val());
		var output = multiply(number1,number2);

		$("#output").prepend("<li>" + output + "</li>");

		event.preventDefault();
	});

	$(".btn-danger").click(function(event) {
		var number1 = parseInt($("#num1").val());
		var number2 = parseInt($("#num2").val());
		var output = divide(number1,number2);
		var modulo = remainder(number1, number2);

		$("#output").prepend("<li>" + Math.floor(output) + " r" + modulo + "</li>");

		event.preventDefault();
	});
});
