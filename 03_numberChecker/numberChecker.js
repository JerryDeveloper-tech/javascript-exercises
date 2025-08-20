function numberChecker(number) {
  if (number >= 10) {
    return true;
  } else {
    return false;
  }
}


console.log(numberChecker(10)); // true


module.exports = numberChecker;
