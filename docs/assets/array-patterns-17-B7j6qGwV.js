const t="07-arrays-array-patterns-17",r="Interleave",s=`const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];
const result = arr1.flatMap((x, i) => [x, arr2[i]]);
console.log(result);`,n=`const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];
const result = arr1.flatMap((x, i) => [x, arr2[i]]);
console.log(result);`,e=[{input:[],expected:"[ 1, 2, 3, 4, 5, 6 ]"}],a=["flatMap returns pairs","Interleave elements"],o={id:t,title:r,starterCode:s,solution:n,tests:e,hints:a};export{o as default,a as hints,t as id,n as solution,s as starterCode,e as tests,r as title};
