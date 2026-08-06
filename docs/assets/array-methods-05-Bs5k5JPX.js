const t="07-arrays-array-methods-05",e="Splice Remove",o=`const arr = ['a', 'b', 'c', 'd'];
arr.____(1, 2);
console.log(arr);`,s=`const arr = ['a', 'b', 'c', 'd'];
arr.splice(1, 2);
console.log(arr);`,r=[{input:[],expected:"[ 'a', 'd' ]"}],n=["splice(index, count) removes","Start at index 1, remove 2"],a={id:t,title:e,starterCode:o,solution:s,tests:r,hints:n};export{a as default,n as hints,t as id,s as solution,o as starterCode,r as tests,e as title};
