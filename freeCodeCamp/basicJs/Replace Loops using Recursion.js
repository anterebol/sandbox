function sum(arr, n) {
  if (n == 0) {
    return 0;
  }
  if (n < 0) {
    return arr[n - 1];
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
}
