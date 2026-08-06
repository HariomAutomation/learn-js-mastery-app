const t="05-loops-patterns-practice-41",n="GCD Loop",e=`function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}
console.log(gcd(48, 18));`,o=`function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}
console.log(gcd(48, 18));`,s=[{input:[],expected:"6"}],c=["Euclidean algorithm","Modulo operation"],a={id:t,title:n,starterCode:e,solution:o,tests:s,hints:c};export{a as default,c as hints,t as id,o as solution,e as starterCode,s as tests,n as title};
