const t="07-arrays-array-patterns-33",e="Unique Sorted",n=`const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
const uniqueSorted = [...new Set(arr)].sort((a, b) => a - b);
console.log(uniqueSorted);`,o=`const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
const uniqueSorted = [...new Set(arr)].sort((a, b) => a - b);
console.log(uniqueSorted);`,r=[{input:[],expected:"[ 1, 2, 3, 4, 5, 6, 9 ]"}],s=["Set for unique","Then sort"],a={id:t,title:e,starterCode:n,solution:o,tests:r,hints:s};export{a as default,s as hints,t as id,o as solution,n as starterCode,r as tests,e as title};
