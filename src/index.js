module.exports = function toReadable (number) {
  let   result = '',
        one_units   = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight","nine"],
        two_units   = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen","sixteen", "seventeen", "eighteen", "nineteen"],
        tens        = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];    


    if (number >= 100 ) {
        result = one_units[Math.floor(number/100)] + ' ' + 'hundred'+' ';
        if (number%100 !==0) {
            number = number%100;
        }
    }

    if (number >= 0 && number <10) {
        result += one_units[number];
    }

    if(number >= 10 && number < 20) {
        result += two_units[number%10];
    }

    if(number >=20 && number <100) {
        let twentyToHundred = tens[(Math.floor(number/10))];
        if (number%10 == 0){
            result += tens[(Math.floor(number/10))];
        } else {
            result += twentyToHundred +' '+ one_units[(number%10)];
        }        
    }   

return result.trim();
}
