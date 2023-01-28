function fizzBuzz(start, end, skip){
    // Your code here!

    // variables for indexed number in number and string form
    let i = start;
    let str = "";

    // the output array
    let arrOfInts = [];

    while(i <= end) {
        str = i.toString();

        // skips if indexed number contains subnumber
        if(str.indexOf(skip) !== -1) {

        } 
        
        // otherwise, adds indexed number to array
        else {
            arrOfInts.push(i);
        }
        i += 1;
    }
    return arrOfInts;
}

// DON'T EDIT THE LINE BELOW THIS COMMENT
module.exports = fizzBuzz;