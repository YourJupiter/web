function toThirdPower(number) {
	return number * number * number;
}
document.writeln("5 ^ 3 = " + toThirdPower(5) + "<br/>");

//task 2
function secondTask(a, b, c) {
	return (a + b) / c;
}
document.writeln("a + b / c = " + secondTask(28, 11, 5) + "<br/>")

//task 3
function getDayOfWeek(number) {
	var days = ["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота", "Неділя"];
	return days[number - 1];
} 
document.writeln("getDayOfWeek(3) -> " + getDayOfWeek(3) + "<br/>");

//task 4
var dayOfWeek = function (number) {
	var days = ["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота", "Неділя"];
	return days[number - 1];
}
document.writeln("dayOfWeek(5) -> " + dayOfWeek(5) + "<br/>")

//task 5
function toPowerWithCycle(number, power) {
	var result = number;
	while (power > 1) {
		result *= number;
		power--;
	}
	return result
}
document.writeln(toPowerWithCycle(2,10) + "<br/>");

function toPowerWithRecursion(number, power) {
	if (power != 1) {
		return number * toPowerWithRecursion(number, power - 1);
	} else {
		return number;
	}
}
document.writeln(toPowerWithRecursion(2, 8))


