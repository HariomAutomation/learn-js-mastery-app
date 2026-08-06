const t="01-variables-declarations-var-let-const-15",e="const reference check",n=`const a = { x: 1 }
const b = a
b.x = 99
console.log(a.x)`,o=`const a = { x: 1 }
const b = a
b.x = 99
console.log(a.x)`,s=[{input:[],expected:"99"}],c=["Both reference same object"],a={id:t,title:e,starterCode:n,solution:o,tests:s,hints:c};export{a as default,c as hints,t as id,o as solution,n as starterCode,s as tests,e as title};
