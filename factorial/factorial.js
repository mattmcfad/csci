(function(){
	function factorial(n){
		if (n >= 0) {
			if (n === 0 || n === 1){
				return 1;
			}
			else 
				return factorial(n-1) * n;
		}
		else
			return "∞";
	}

	console.log(factorial(5));
	console.log(factorial(-1));
	console.log(factorial(0));
	console.log(factorial(10));
	console.log(factorial(150));
})();