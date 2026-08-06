const c="07-arrays-array-patterns-43",e="Unique Preserving Order",t=`const arr = ['b', 'a', 'b', 'c', 'a', 'd'];
const unique = arr.reduce((acc, x) => acc.includes(x) ? acc : [...acc, x], []);
console.log(unique);`,n=`const arr = ['b', 'a', 'b', 'c', 'a', 'd'];
const unique = arr.reduce((acc, x) => acc.includes(x) ? acc : [...acc, x], []);
console.log(unique);`,s=[{input:[],expected:"[ 'b', 'a', 'c', 'd' ]"}],r=["Reduce with includes","Preserve first occurrence"],a={id:c,title:e,starterCode:t,solution:n,tests:s,hints:r};export{a as default,r as hints,c as id,n as solution,t as starterCode,s as tests,e as title};
