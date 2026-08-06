const t="08-objects-destructuring-copying-46",s="Merge Assign",e=`const target = {a: 1};
const source1 = {b: 2};
const source2 = {c: 3};
Object.assign(target, source1, source2);
console.log(target);`,o=`const target = {a: 1};
const source1 = {b: 2};
const source2 = {c: 3};
Object.assign(target, source1, source2);
console.log(target);`,n=[{input:[],expected:"{ a: 1, b: 2, c: 3 }"}],c=["Multiple sources","Merge into target"],r={id:t,title:s,starterCode:e,solution:o,tests:n,hints:c};export{r as default,c as hints,t as id,o as solution,e as starterCode,n as tests,s as title};
