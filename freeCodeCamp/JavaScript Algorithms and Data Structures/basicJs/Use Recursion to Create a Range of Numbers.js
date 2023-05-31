function rangeOfNumbers(startNum, endNum) {
  if (startNum === endNum) {
    return [startNum];
  } else {
    const countArr = rangeOfNumbers(startNum + 1, endNum);
    countArr.unshift(startNum);
    return countArr;
  }
}
