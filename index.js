function getPrimeNums(n) {
  const numbers = []
  for (let i = 2; numbers.length < n; i++) {
      let flag = false
      for (let j = 0; j < i; j++) {
          if (i % numbers[j] === 0) {
              flag = true;
              break;
          }
      }
      if (flag === false) {
          numbers.push(i)
      }
  }
  return numbers
}

console.log(getPrimeNums(process.argv[2]));
