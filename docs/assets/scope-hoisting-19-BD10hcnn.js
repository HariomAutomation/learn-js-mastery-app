const t="01-variables-declarations-scope-hoisting-19",o="Arrow function scope",n=`const x = 10
const fn = () => console.log(x)
fn()`,s=`const x = 10
const fn = () => console.log(x)
fn()`,e=[{input:[],expected:"10"}],c=["Arrow functions inherit scope"],i={id:t,title:o,starterCode:n,solution:s,tests:e,hints:c};export{i as default,c as hints,t as id,s as solution,n as starterCode,e as tests,o as title};
