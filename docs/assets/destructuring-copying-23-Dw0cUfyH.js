const t="08-objects-destructuring-copying-23",s="Rest Array",o=`const arr = [1, 2, 3, 4];
const [head, ...tail] = arr;
console.log(head);
console.log(tail);`,e=`const arr = [1, 2, 3, 4];
const [head, ...tail] = arr;
console.log(head);
console.log(tail);`,n=[{input:[],expected:`1
[ 2, 3, 4 ]`}],c=["First element separate","Rest collects rest"],r={id:t,title:s,starterCode:o,solution:e,tests:n,hints:c};export{r as default,c as hints,t as id,e as solution,o as starterCode,n as tests,s as title};
