module.exports = function reverse (n) {
let abs= Math.abs(n);
    let str = String(abs);
    let array=Array.from(str);
    let newNumber=array.reverse().join('');
    return Number(newNumber);
}

