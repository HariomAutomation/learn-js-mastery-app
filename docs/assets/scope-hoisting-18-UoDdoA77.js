const t="01-variables-declarations-scope-hoisting-18",o="Function declaration hoisting",s=`test()
function test() { console.log("hoisted") }`,e=`test()
function test() { console.log("hoisted") }`,n=[{input:[],expected:"hoisted"}],i=["Function declarations are fully hoisted"],c={id:t,title:o,starterCode:s,solution:e,tests:n,hints:i};export{c as default,i as hints,t as id,e as solution,s as starterCode,n as tests,o as title};
