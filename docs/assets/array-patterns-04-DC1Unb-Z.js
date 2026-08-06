const t="07-arrays-array-patterns-04",s="Intersection",r=`const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
const result = arr1.filter(x => arr2.includes(x));
console.log(result);`,n=`const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
const result = arr1.filter(x => arr2.includes(x));
console.log(result);`,e=[{input:[],expected:"[ 3, 4 ]"}],o=["filter with includes","Common elements"],a={id:t,title:s,starterCode:r,solution:n,tests:e,hints:o};export{a as default,o as hints,t as id,n as solution,r as starterCode,e as tests,s as title};
