(function(){
	function powerplant(n){
		var count = 0;
		for (var i = 1; i <= n; i++) {
			if (i % 3 !== 0 && i % 14 !== 0 && i % 100 !== 0){
				count++;
			}
		}
		return count;
	}

	console.log(powerplant(10));
	console.log(powerplant(500));
})();