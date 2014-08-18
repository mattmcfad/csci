(function(){
	function fibRecur(n){
		var seq = [];

		function recur(index,a,b){

			if (index > 0){
				seq.push(a);
			}
			if (index > 1){
				recur(index -1, b , a + b);
			}
		}
		recur(n,0,1);
		console.log('recur: ' + seq);
	}

	function fibLoop(n){
		var seq = [];

		for (var index = 0; index < n; index++){
			// if < 2 then 0,1,2,
			// else add last 2 terms...
			seq.push(index < 2 ? index : (seq[index - 2] + seq[index - 1]));
		}
		console.log('for: ' + seq);
	}


	fibLoop(10);
	fibRecur(10);
	
})();