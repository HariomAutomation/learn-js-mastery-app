const t="07-arrays-array-patterns-35",r="Difference Symmetric",n=`const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
const diff = arr1.filter(x => !arr2.includes(x)).concat(arr2.filter(x => !arr1.includes(x)));
console.log(diff);`,e=`const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
const diff = arr1.filter(x => !arr2.includes(x)).concat(arr2.filter(x => !arr1.includes(x)));
console.log(diff);`,s=[{input:[],expected:"[ 1, 2, 5, 6 ]"}],o=["Symmetric difference","Elements in either but not both"],c={id:t,title:r,starterCode:n,solution:e,tests:s,hints:o};export{c as default,o as hints,t as id,e as solution,n as starterCode,s as tests,r as title};
