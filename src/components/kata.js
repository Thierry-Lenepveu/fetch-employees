function isAmstrong(num) {
    return num === num
                    .toString()
                    .split("")
                    .map(value => parseInt(value))
                    .reduce((sum, value, _, array) => sum + Math.pow(value, array.length), 0);
}

console.log(isAmstrong(153));
