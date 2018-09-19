module.exports = function solveEquation(equation) {
 	var z,discr,x1,x2,arr=[],a,b,c;

	z = equation.split(" ");
	// console.log(z);
	 a = z[0]; 
	 b = z[3]+z[4];
	 c = z[7]+z[8];
	discr = (b*b) - (4*a*c);
	// console.log(discr);
	x1 = ((-b) + (Math.sqrt(discr)))/(2*a);
	x2 = ((-b) - (Math.sqrt(discr)))/(2*a);
	var x3 = Math.round(x1);
	var x4 = Math.round(x2);
	// console.log(x1);
	// console.log(x2);
	arr.push(x3);
	arr.push(x4);
	// var qwe = Math.round(arr);
	// console.log(arr);
	arr.sort(function(a,b) {return a-b});
	return arr
}

 
 
 