//task 1
var name = "Jana Kyryliuk";
alert(name);


//task 2
var a = 5;
var b = 11;
var c = a - b;
var d = 7;
var result = c + d;
alert(result);

//task 3
var variant = prompt("Enter your variant");
variant >= 7 ? alert("Вірно") : alert("Невірно");
a % 2 == 0 ? a += 7 : a -= 3;
alert(a);

a = 5;
a % 2 == 0 ? a += 7 : a -= 3;
alert(a);

a = 0;
a % 2 == 0 ? a += 7 : a -= 3;
alert(a);

a = -3;
a % 2 == 0 ? a += 7 : a -= 3;
alert(a);

a = 2;
a % 2 == 0 ? a += 7 : a -= 3;
alert(a); 


//task 4
variant = 5;
var limit = variant + 10;

for(var i = 1; i < limit; i++) {
	document.writeln(i + " ^ 2" + " = " +(i * i) + "<br/>");
}


//task 5 
document.write("<br/><br/>" + "Прості числа від 2 до " + limit + " : " + "<br/>");
var iter = 0;
for(var i = 2; i <= limit; i++){
	for(var j = 1; j <= limit; j++){
		if(i % j == 0){iter++}
	}
	if(iter == 2){
		document.write(i + "<br />"); 
		iter = 0; 
	} else { 
		iter = 0
	}
}
