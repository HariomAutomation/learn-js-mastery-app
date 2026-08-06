const t="07-arrays-array-patterns-08",s="Rotate Right",o=`const arr = [1, 2, 3, 4, 5];
const rotated = arr.slice(-1).concat(arr.slice(0, -1));
console.log(rotated);`,e=`const arr = [1, 2, 3, 4, 5];
const rotated = arr.slice(-1).concat(arr.slice(0, -1));
console.log(rotated);`,r=[{input:[],expected:"[ 5, 1, 2, 3, 4 ]"}],n=["Slice last element","Concat with rest"],a={id:t,title:s,starterCode:o,solution:e,tests:r,hints:n};export{a as default,n as hints,t as id,e as solution,o as starterCode,r as tests,s as title};
