const t="07-arrays-array-patterns-34",n="Intersection Multiple",r=`const arr1 = [1, 2, 3, 4];
const arr2 = [2, 3, 4, 5];
const arr3 = [3, 4, 5, 6];
const common = arr1.filter(x => arr2.includes(x) && arr3.includes(x));
console.log(common);`,s=`const arr1 = [1, 2, 3, 4];
const arr2 = [2, 3, 4, 5];
const arr3 = [3, 4, 5, 6];
const common = arr1.filter(x => arr2.includes(x) && arr3.includes(x));
console.log(common);`,o=[{input:[],expected:"[ 3, 4 ]"}],e=["Filter with multiple includes","Must be in all arrays"],c={id:t,title:n,starterCode:r,solution:s,tests:o,hints:e};export{c as default,e as hints,t as id,s as solution,r as starterCode,o as tests,n as title};
