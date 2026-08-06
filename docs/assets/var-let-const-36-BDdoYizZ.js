const t="01-variables-declarations-var-let-const-36",n="const reference check 2",e=`const a = [1, 2]
const b = a
b.push(3)
console.log(a.length)`,s=`const a = [1, 2]
const b = a
b.push(3)
console.log(a.length)`,o=[{input:[],expected:"3"}],c=["Same reference"],a={id:t,title:n,starterCode:e,solution:s,tests:o,hints:c};export{a as default,c as hints,t as id,s as solution,e as starterCode,o as tests,n as title};
