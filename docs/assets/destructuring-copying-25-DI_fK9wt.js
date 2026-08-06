const t="08-objects-destructuring-copying-25",s="Nested Array Destruct",n=`const arr = [1, [2, 3], 4];
const [a, [b, c], d] = arr;
console.log(a, b, c, d);`,o=`const arr = [1, [2, 3], 4];
const [a, [b, c], d] = arr;
console.log(a, b, c, d);`,c=[{input:[],expected:"1 2 3 4"}],r=["Nested array destructuring","Match structure"],e={id:t,title:s,starterCode:n,solution:o,tests:c,hints:r};export{e as default,r as hints,t as id,o as solution,n as starterCode,c as tests,s as title};
