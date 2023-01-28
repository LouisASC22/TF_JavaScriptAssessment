function oddOneOut(arrOfInts){
    // Your code here!
    for(let i=0; i <= arrOfInts.length-1; i++) {
        if(arrOfInts[i] % 2 != 0) {
            
            // returns first odd
            return(arrOfInts[i]);
        }
    }

    // returns -1 if no odd numbers
    return -1;
}


// DON'T EDIT THE LINE BELOW THIS COMMENT
module.exports = oddOneOut;