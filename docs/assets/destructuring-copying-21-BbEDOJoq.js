const t="08-objects-destructuring-copying-21",s="Swap Variables",e=`let a = 1, b = 2;
[a, b] = [b, a];
console.log(a, b);`,n=`let a = 1, b = 2;
[a, b] = [b, a];
console.log(a, b);`,o=[{input:[],expected:"2 1"}],a=["Array destructuring swap","Temp-free swap"],c={id:t,title:s,starterCode:e,solution:n,tests:o,hints:a};export{c as default,a as hints,t as id,n as solution,e as starterCode,o as tests,s as title};
