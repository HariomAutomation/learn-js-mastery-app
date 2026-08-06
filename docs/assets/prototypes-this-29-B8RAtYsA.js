const t="13-oop-prototypes-this-29",s="This Practice",n=`const calculator = {
  value: 0,
  add(n) { this.value += n; return this; },
  result() { return this.value; }
};
console.log(calculator.add(5).add(3).result());`,e=`const calculator = {
  value: 0,
  add(n) { this.value += n; return this; },
  result() { return this.value; }
};
console.log(calculator.add(5).add(3).result());`,o=[{input:[],expected:"8"}],l=["Return this for chaining","this is the calculator object"],a={id:t,title:s,starterCode:n,solution:e,tests:o,hints:l};export{a as default,l as hints,t as id,e as solution,n as starterCode,o as tests,s as title};
