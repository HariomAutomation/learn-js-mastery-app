const t="07-arrays-array-patterns-06",r="Zip Arrays",s=`const arr1 = [1, 2, 3];
const arr2 = ['a', 'b', 'c'];
const result = arr1.map((x, i) => [x, arr2[i]]);
console.log(result);`,n=`const arr1 = [1, 2, 3];
const arr2 = ['a', 'b', 'c'];
const result = arr1.map((x, i) => [x, arr2[i]]);
console.log(result);`,a=[{input:[],expected:"[ [ 1, 'a' ], [ 2, 'b' ], [ 3, 'c' ] ]"}],o=["Map with index","Pair elements"],e={id:t,title:r,starterCode:s,solution:n,tests:a,hints:o};export{e as default,o as hints,t as id,n as solution,s as starterCode,a as tests,r as title};
