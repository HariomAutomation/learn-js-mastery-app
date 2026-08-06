const t="01-variables-declarations-var-let-const-24",o="const nested object",s=`const obj = { a: { b: 1 } }
obj.a.b = 99
console.log(obj.a.b)`,e=`const obj = { a: { b: 1 } }
obj.a.b = 99
console.log(obj.a.b)`,n=[{input:[],expected:"99"}],a=["Nested objects are mutable"],c={id:t,title:o,starterCode:s,solution:e,tests:n,hints:a};export{c as default,a as hints,t as id,e as solution,s as starterCode,n as tests,o as title};
