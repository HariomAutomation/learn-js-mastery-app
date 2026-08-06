const t="05-loops-patterns-practice-27",n="Fibonacci Iterative",e=`function fib(n) {
  let a = 0, b = 1;
  for (let i = 0; i < n; i++) {
    [a, b] = [b, a + b];
  }
  return a;
}
console.log(fib(7));`,o=`function fib(n) {
  let a = 0, b = 1;
  for (let i = 0; i < n; i++) {
    [a, b] = [b, a + b];
  }
  return a;
}
console.log(fib(7));`,i=[{input:[],expected:"13"}],s=["Swap values","Return a"],a={id:t,title:n,starterCode:e,solution:o,tests:i,hints:s};export{a as default,s as hints,t as id,o as solution,e as starterCode,i as tests,n as title};
