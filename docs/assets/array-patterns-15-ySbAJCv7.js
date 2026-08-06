const t="07-arrays-array-patterns-15",e="Deduplicate",s=`const arr = [1, 1, 2, 3, 3, 3, 4, 4];
const deduped = [...new Set(arr)];
console.log(deduped);`,n=`const arr = [1, 1, 2, 3, 3, 3, 4, 4];
const deduped = [...new Set(arr)];
console.log(deduped);`,o=[{input:[],expected:"[ 1, 2, 3, 4 ]"}],r=["Set for unique values","Spread to array"],a={id:t,title:e,starterCode:s,solution:n,tests:o,hints:r};export{a as default,r as hints,t as id,n as solution,s as starterCode,o as tests,e as title};
