const t="07-arrays-array-patterns-03",e="Unique Array",n=`const arr = [1, 2, 2, 3, 3, 3, 4];
const unique = [...new Set(arr)];
console.log(unique);`,s=`const arr = [1, 2, 2, 3, 3, 3, 4];
const unique = [...new Set(arr)];
console.log(unique);`,r=[{input:[],expected:"[ 1, 2, 3, 4 ]"}],o=["Set removes duplicates","Spread back to array"],a={id:t,title:e,starterCode:n,solution:s,tests:r,hints:o};export{a as default,o as hints,t as id,s as solution,n as starterCode,r as tests,e as title};
