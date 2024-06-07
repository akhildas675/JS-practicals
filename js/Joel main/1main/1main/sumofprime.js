const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
function sumofPrime(odi){
    return odi.filter((x)=>isPrime(x)).reduce((sum,curr)=>sum+curr,0)
}

const check=sumofPrime(arr)

console.log(check)
