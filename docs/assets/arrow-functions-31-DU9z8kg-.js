const t="06-functions-arrow-functions-31",o="Arrow Reduce Object",s=`const arr = [{v:1}, {v:2}, {v:3}];
const sum = arr.reduce((acc, obj) => acc + obj.v, 0);
console.log(sum);`,c=`const arr = [{v:1}, {v:2}, {v:3}];
const sum = arr.reduce((acc, obj) => acc + obj.v, 0);
console.log(sum);`,n=[{input:[],expected:"6"}],e=["Access property","Accumulate sum"],r={id:t,title:o,starterCode:s,solution:c,tests:n,hints:e};export{r as default,e as hints,t as id,c as solution,s as starterCode,n as tests,o as title};
