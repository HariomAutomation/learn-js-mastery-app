const t="07-arrays-array-patterns-23",n="Intersection Filter",o=`const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];
const common = arr1.filter(x => arr2.includes(x));
console.log(common);`,r=`const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];
const common = arr1.filter(x => arr2.includes(x));
console.log(common);`,s=[{input:[],expected:"[ 3, 4, 5 ]"}],e=["Filter with includes","Common elements"],c={id:t,title:n,starterCode:o,solution:r,tests:s,hints:e};export{c as default,e as hints,t as id,r as solution,o as starterCode,s as tests,n as title};
