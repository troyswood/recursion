
// 5 : 5 * 4 * 3 * 2 * 1
// 5 : 5 fact(4)

var fact = fumction(n) {
	if (n ===0 ) {
		return 1; 
	}
	return n * fact (n-1);
}


console.log(fact(4));
console.log(fact(5));


// Fibonacci: 
// 1 1 2 3 5 8 13 21
// 13: 8 + 5

var fib = function(n) {
	if (n <= 2) {
		return 1;
	}
  return fib(n-1) + fib(n-2);
  
}

console.log(fib(7));
console.log(fib(8));
