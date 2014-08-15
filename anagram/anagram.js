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
				letters[anagram.charAt(i)] = false;
			}
		}

		function run(){
			for (var i = anagram.length; i <= str.length; i++){
				for (var j = 0; j < anagram.length; j++){
					var index = i - anagram.length + j;
					//console.log(str.charAt(index)+' = '+letters[str.charAt(index)]);
					if (letters[str.charAt(index)] === false){
						letters[str.charAt(index)] = true;
						count++;
					}
				}
				if (count === anagram.length) {
					console.log("match @ chars[" + (i-anagram.length+1) + "] - ["+ (i+1)  + "]");
					matches++;
				}
				reset();
			}
		}

		reset();
		run();
		console.log("Total Matches: " + matches);
	};

	
	anagramSolver('goodogdoecaogodgdgo','god');
	anagramSolver('abcedaebcbedbcebabdbcebdbcbedbacbabcbd','abcd');
	anagramSolver('luspnayu','pansy');
	anagramSolver('xoyozxoxozxoyxzoxzoxoxyzoxyoyxoxoxozxzzxy','xyz');

})();