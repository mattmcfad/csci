(function(){
	function starDelete(str){
		// need 'g' flag param to ensure all patterns matched and ! only the first one
		// var re = new RegExp(".?[*]+.?",'g'); 
		var re = /.?[*]+.?/g; // g flag on end
		return str.replace(re,'');
	}

console.log(starDelete('adf*lp'));
console.log(starDelete('a*o'));
console.log(starDelete('*dech*'));
console.log(starDelete('de**po'));
console.log(starDelete('sa*n*ti'));
console.log(starDelete('abc'));
})();