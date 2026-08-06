const n="05-loops-patterns-practice-43",t="Prime Check Loop",e=`function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
console.log(isPrime(17));
console.log(isPrime(15));`,i=`function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
console.log(isPrime(17));
console.log(isPrime(15));`,s=[{input:[],expected:`true
false`}],r=["Check divisibility","Only up to sqrt(n)"],o={id:n,title:t,starterCode:e,solution:i,tests:s,hints:r};export{o as default,r as hints,n as id,i as solution,e as starterCode,s as tests,t as title};
