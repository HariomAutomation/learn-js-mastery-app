const e="07-arrays-map-filter-reduce-21",s="Map Property",t=`const users = [{name: 'Alice', age: 25}, {name: 'Bob', age: 30}];
const names = users.____(u => u.name);
console.log(names);`,n=`const users = [{name: 'Alice', age: 25}, {name: 'Bob', age: 30}];
const names = users.map(u => u.name);
console.log(names);`,a=[{input:[],expected:"[ 'Alice', 'Bob' ]"}],o=["Extract name property","Map returns array"],r={id:e,title:s,starterCode:t,solution:n,tests:a,hints:o};export{r as default,o as hints,e as id,n as solution,t as starterCode,a as tests,s as title};
