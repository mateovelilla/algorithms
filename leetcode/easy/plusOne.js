/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for(let i = digits.length - 1; i >= 0 ; i--) {
        if(digits[i]< 9) {
            digits[i]+=1
            return digits
        }
        digits[i]= 0
    }
    return [1,...digits]
};
console.log(plusOne([1,9,9]))
console.log(plusOne([9]))
