const t="07-arrays-array-patterns-45",e="Difference Symmetric Two",s=`const a = [1, 2, 3];
const b = [2, 3, 4];
const symmetric = [...a.filter(x => !b.includes(x)), ...b.filter(x => !a.includes(x))];
console.log(symmetric);`,n=`const a = [1, 2, 3];
const b = [2, 3, 4];
const symmetric = [...a.filter(x => !b.includes(x)), ...b.filter(x => !a.includes(x))];
console.log(symmetric);`,c=[{input:[],expected:"[ 1, 4 ]"}],o=["Symmetric difference","Unique to each array"],r={id:t,title:e,starterCode:s,solution:n,tests:c,hints:o};export{r as default,o as hints,t as id,n as solution,s as starterCode,c as tests,e as title};
