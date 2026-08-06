const n="05-loops-patterns-practice-42",t="LCM Loop",e=`function lcm(a, b) {
  return (a * b) / gcd(a, b);
}
function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}
console.log(lcm(4, 6));`,o=`function lcm(a, b) {
  return (a * b) / gcd(a, b);
}
function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}
console.log(lcm(4, 6));`,c=[{input:[],expected:"12"}],s=["LCM = a*b/GCD","Use GCD function"],a={id:n,title:t,starterCode:e,solution:o,tests:c,hints:s};export{a as default,s as hints,n as id,o as solution,e as starterCode,c as tests,t as title};
