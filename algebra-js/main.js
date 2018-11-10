let equation1,equation2,
solve = document.querySelector("#submit");



// Declare the objects
var Expression = algebra.Expression;
var Fraction = algebra.Fraction;
var Equation = algebra.Equation;

// when the buttion is click solve the problem
solve.addEventListener("click", function() {
	equation1  = document.querySelector("#equation1").value;
	equation2  = document.querySelector("#equation2").value;
	let output = document.querySelector("#answer");
	let x1 = algebra.parse(equation1);
	let x2 = algebra.parse(equation2);

	let eq = new Equation(x1,x2);
	let div = eq.toString() + "<br>";

	let answer = eq.solveFor('x');
	div += "x = " + answer.toString();
	
	output.innerHTML = div;
})


	
	// let input = prompt("enter a value");
	// let parts = input.split('=');
	// if (input.charAt(1) === "x") {
	// 	console.log(eval(parts[0, 1]))
	// }
	// let answer = eval(parts[1]);
	// console.log(answer)

	// 