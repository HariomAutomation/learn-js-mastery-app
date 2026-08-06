const t="03-operators-logical-ternary-21",o="Logical AND assignment (&&=)",s=`let x = 10;
x &&= 5;
console.log(x);`,e=`let x = 10;
x &&= 5;
console.log(x);`,n=[{input:[],expected:"5"}],l=["x &&= 5 means x = x && 5","x is truthy, so x becomes 5"],c={id:t,title:o,starterCode:s,solution:e,tests:n,hints:l};export{c as default,l as hints,t as id,e as solution,s as starterCode,n as tests,o as title};
