const t="06-functions-higher-order-functions-43",n="Accumulator Pattern",o=`function accumulator() {
  let total = 0;
  return {
    add: (n) => { total += n; return this; },
    value: () => total
  };
}
const acc = accumulator();
acc.add(10).add(20).add(30);
console.log(acc.value());`,a=`function accumulator() {
  let total = 0;
  return {
    add: (n) => { total += n; return this; },
    value: () => total
  };
}
const acc = accumulator();
acc.add(10).add(20).add(30);
console.log(acc.value());`,c=[{input:[],expected:"60"}],e=["Chain methods","Return this"],s={id:t,title:n,starterCode:o,solution:a,tests:c,hints:e};export{s as default,e as hints,t as id,a as solution,o as starterCode,c as tests,n as title};
