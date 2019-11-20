/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
  if (N <= 1) {
    return N
  }
  let n1 = 0
  let n2 = 1
  let tmp
  for (let i = 2; i <= N; i++) {
      tmp = n2
      n2 = n2 + n1
      n1 = tmp
  }
  return n2
};


/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
  if (N <= 1) {
      return N
  } else {
      return fib(N - 1) + fib(N - 2)
  }
};
