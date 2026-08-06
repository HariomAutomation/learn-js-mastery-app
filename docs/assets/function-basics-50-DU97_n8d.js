const t="06-functions-function-basics-50",n="Accumulator Pattern",a=`function accumulator() {
  let total = 0;
  return {
    add: (n) => { total += n; return this; },
    value: () => total
  };
}
const acc = accumulator();
acc.add(10).add(20).add(30);
console.log(acc.value());`,c=`function accumulator() {
  let total = 0;
  return {
    add: (n) => { total += n; return this; },
    value: () => total
  };
}
const acc = accumulator();
acc.add(10).add(20).add(30);
console.log(acc.value());`,o=[{input:[],expected:"60"}],s=["Chain methods","Return this"],e={id:t,title:n,starterCode:a,solution:c,tests:o,hints:s};export{e as default,s as hints,t as id,c as solution,a as starterCode,o as tests,n as title};
