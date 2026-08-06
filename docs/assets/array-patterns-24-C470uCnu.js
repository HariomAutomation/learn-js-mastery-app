const t="07-arrays-array-patterns-24",r="Difference Filter",n=`const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5];
const diff = arr1.filter(x => !arr2.includes(x));
console.log(diff);`,s=`const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5];
const diff = arr1.filter(x => !arr2.includes(x));
console.log(diff);`,e=[{input:[],expected:"[ 1, 2 ]"}],o=["Filter with !includes","Not in second array"],i={id:t,title:r,starterCode:n,solution:s,tests:e,hints:o};export{i as default,o as hints,t as id,s as solution,n as starterCode,e as tests,r as title};
