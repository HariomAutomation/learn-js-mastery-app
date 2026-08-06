const t="07-arrays-array-patterns-41",c="Flatten Reduce",r=`const arr = [[1, 2], [3, 4], [5, 6]];
const flat = arr.reduce((acc, curr) => acc.concat(curr), []);
console.log(flat);`,e=`const arr = [[1, 2], [3, 4], [5, 6]];
const flat = arr.reduce((acc, curr) => acc.concat(curr), []);
console.log(flat);`,n=[{input:[],expected:"[ 1, 2, 3, 4, 5, 6 ]"}],a=["Reduce with concat","Flatten one level"],o={id:t,title:c,starterCode:r,solution:e,tests:n,hints:a};export{o as default,a as hints,t as id,e as solution,r as starterCode,n as tests,c as title};
