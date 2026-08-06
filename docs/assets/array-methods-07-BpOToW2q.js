const t="07-arrays-array-methods-07",e="Splice Replace",s=`const arr = [1, 2, 3, 4];
arr.____(1, 2, 20, 30);
console.log(arr);`,o=`const arr = [1, 2, 3, 4];
arr.splice(1, 2, 20, 30);
console.log(arr);`,r=[{input:[],expected:"[ 1, 20, 30, 4 ]"}],n=["splice replaces elements","Remove 2, insert 2"],a={id:t,title:e,starterCode:s,solution:o,tests:r,hints:n};export{a as default,n as hints,t as id,o as solution,s as starterCode,r as tests,e as title};
