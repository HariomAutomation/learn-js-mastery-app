const t="07-arrays-array-patterns-05",r="Difference",s=`const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
const result = arr1.filter(x => !arr2.includes(x));
console.log(result);`,n=`const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
const result = arr1.filter(x => !arr2.includes(x));
console.log(result);`,e=[{input:[],expected:"[ 1, 2 ]"}],o=["filter with !includes","Elements in arr1 not in arr2"],a={id:t,title:r,starterCode:s,solution:n,tests:e,hints:o};export{a as default,o as hints,t as id,n as solution,s as starterCode,e as tests,r as title};
