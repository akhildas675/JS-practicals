// function isPrime(num) {
//     if (num <= 1) return false;
//     if (num === 2) return true;
//     if (num % 2 === 0) return false;
//     for (let i = 3; i * i <= num; i += 2) {
//       if (num % i === 0) return false;
//     }
//     return true;
//   }

//   const a = [1, 2, 3, 4, 5, 6];

//   const primeNumbers = a.filter((number) => isPrime(number));

//   console.log(primeNumbers);







const arr = [4, 7, 5, 2, 1, 3, 7,0, 9, 1];
const arr1 = arr.filter((n) => {
  for (i = 2; i <= n / 2; i++) {
    if (n % i === 0) {
      return false
    }
    return true

  }
  if (n == 2) return true
})
console.log(arr1);


