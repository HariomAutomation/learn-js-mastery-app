const t="03-operators-logical-ternary-23",o="Logical OR assignment with truthy",s=`let x = "hello";
x ||= "default";
console.log(x);`,e=`let x = "hello";
x ||= "default";
console.log(x);`,l=[{input:[],expected:"hello"}],n=["x is truthy, so assignment doesn't happen","x stays as 'hello'"],a={id:t,title:o,starterCode:s,solution:e,tests:l,hints:n};export{a as default,n as hints,t as id,e as solution,s as starterCode,l as tests,o as title};
