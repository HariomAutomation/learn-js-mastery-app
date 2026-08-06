const t="01-variables-declarations-variables-intro-03",s="Swap two variables",a=`let a = 1, b = 2
// swap a and b
console.log(a, b)`,e=`let a = 1, b = 2
[a, b] = [b, a]
console.log(a, b)`,o=[{input:[],expected:"2 1"}],n=["Use destructuring"],i={id:t,title:s,starterCode:a,solution:e,tests:o,hints:n};export{i as default,n as hints,t as id,e as solution,a as starterCode,o as tests,s as title};
