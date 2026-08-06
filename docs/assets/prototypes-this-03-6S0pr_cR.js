const t="13-oop-prototypes-this-03",o="This in Function",n=`function greet() {
  console.log(this);
}
greet();`,s=`function greet() {
  console.log(this);
}
greet();`,e=[{input:[],expected:"[object Object]"}],i=["this in global function is globalThis","In strict mode, this is undefined"],c={id:t,title:o,starterCode:n,solution:s,tests:e,hints:i};export{c as default,i as hints,t as id,s as solution,n as starterCode,e as tests,o as title};
