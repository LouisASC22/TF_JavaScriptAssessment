function strClean(arrOfStrs){
    //Your code goes here

    // the output array
    let newArr = [];

    // temporary holding spaces for removing whitespace and nonzeroes
    let result = "";
    let digit = "";

    for(let i=0; i < arrOfStrs.length; i++) {

        // the given element of the array
        result = arrOfStrs[i].trim();

        // removes nonzeroes
        for(let j=0; j < result.length; j++) {
            digit = result.substring(j, j+1);
            
            if(parseInt(digit, 10) != undefined) {
                if(digit != 0 && digit != 1) {
                    result.replace(digit, "");
                } 
            }

            if(digit != 0 && digit != 1) {
                result.replace(digit, "");
            } 
            
            console.log(digit);

            console.log(result);
        }

        // replaces 1 and 0 with one and zero
        result.replace("1", "one");
        result.replace("0", "zero");

        // replaces spaces with underscores
        result.replace(" ", "_");

        // removing whitespace
        newArr.push(result);

    }

    return(newArr);
    
}

console.log(strClean(["   mem   ", "ger   ", "   bee", "10023"]));

let p = "I want bacon";
j = p.replace("bacon", "hamburgers");
console.log(j);

// DO NOT EDIT THE LINE BELOW THIS
module.exports = strClean;