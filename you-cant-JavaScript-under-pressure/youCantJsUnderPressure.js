// http://games.usvsth3m.com/javascript-under-pressure/

// Level 1
function doubleInteger(i) {
    
    // i will be an integer. Double it and return it.   
   
    return i*2;
}

// Level 2
function isNumberEven(i) {
    
    // i will be an integer. Return true if it's even, and false if it isn't.
    
    return (i % 2 === 0 ? true : false)
}

// Level 3
function getFileExtension(i) {
    
    // i will be a string, but it may not have a file extension.
    // return the file extension (with no period) if it has one, otherwise false
    
    if (i.indexOf('.') === -1)
        return false;
    else
        return i.substring(i.indexOf('.')+1,i.length)
    
}

// Level 4
function longestString(i) {
    
    // i will be an array.
    // return the longest string in the array
    
    var longest = '';
    for (var j = 0; j < i.length; j++){
        if (typeof i[j] === 'string')
            if (i[j].length > longest.length)
                longest = i[j];
    }
    return longest;

}

// Level 5
function arraySum(i) {
    // i will be an array, containing integers, strings and/or arrays like itself.
    // Sum all the integers you find, anywhere in the nest of arrays.
    var sum = 0;
    
    for (var j = 0; j < i.length; j++){
        if (typeof i[j] === 'number')
            sum += i[j];
        else if (Array.isArray(i[j]))
            nestedSearch(i[j]);
    }
    
    function nestedSearch(obj) {
        if (Array.isArray(obj))
            for (var k = 0; k < obj.length; k++){
                if (Array.isArray(obj[k]))
                    nestedSearch(obj[k]);
                else if (typeof obj[k] === 'number')
                   sum += obj[k]; 
            }
        else if (typeof obj === 'number')
            sum += obj;   
    }

    return sum;
}