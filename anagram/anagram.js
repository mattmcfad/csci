(function(){

	function anagramSolver(str, anagram){	
		console.log("----------------------------------");
		console.log("String: " + str);
		console.log("Anagram: " + anagram);
		var letters = {}; //letters in the anagram
		var count, matches = 0;

		function reset(){
			count = 0;
			for (var i = 0; i < anagram.length; i++){
				//console.log(anagram.charAt(i)+", false");
				letters[anagram.charAt(i)] = false;
			}
		}
		reset();

		for (var i = anagram.length; i <= str.length; i++){
			for (var j = 0; j < anagram.length; j++){
				var index = i - anagram.length + j;
				//console.log("index:" + index);
				//console.log(str.charAt(index)+' = '+letters[str.charAt(index)]);
				if (letters[str.charAt(index)] === false){
					letters[str.charAt(index)] = true;
					//console.log('count ++' );
					count++;
				}
			}
			if (count === anagram.length) {
				console.log("match @ chars[" + (i-anagram.length+1) + "] - ["+ (i+1)  + "]");
				matches++;
			}
			reset();
		}

		console.log("Total Matches: " + matches);
	};

	
	anagramSolver('goodogdoecaogodgdgo','god');
	anagramSolver('abcedaebcbedbcebabdbcebdbcbedbacbabcbd','abcd');
	anagramSolver('luspnayu','pansy');
	anagramSolver('xoyozxoxozxoyxzoxzoxoxyzoxyoyxoxoxozxzzxy','xyz');

})();