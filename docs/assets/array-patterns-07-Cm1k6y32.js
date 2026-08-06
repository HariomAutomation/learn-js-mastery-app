const t="07-arrays-array-patterns-07",o="Rotate Left",e=`const arr = [1, 2, 3, 4, 5];
const rotated = arr.slice(1).concat(arr.slice(0, 1));
console.log(rotated);`,s=`const arr = [1, 2, 3, 4, 5];
const rotated = arr.slice(1).concat(arr.slice(0, 1));
console.log(rotated);`,r=[{input:[],expected:"[ 2, 3, 4, 5, 1 ]"}],n=["Slice from index 1","Concat first element"],a={id:t,title:o,starterCode:e,solution:s,tests:r,hints:n};export{a as default,n as hints,t as id,s as solution,e as starterCode,r as tests,o as title};
