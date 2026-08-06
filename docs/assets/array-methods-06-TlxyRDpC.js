const t="07-arrays-array-methods-06",s="Splice Insert",e=`const arr = ['a', 'c', 'd'];
arr.____(1, 0, 'b');
console.log(arr);`,o=`const arr = ['a', 'c', 'd'];
arr.splice(1, 0, 'b');
console.log(arr);`,r=[{input:[],expected:"[ 'a', 'b', 'c', 'd' ]"}],n=["splice(index, 0, item) inserts","No elements removed"],a={id:t,title:s,starterCode:e,solution:o,tests:r,hints:n};export{a as default,n as hints,t as id,o as solution,e as starterCode,r as tests,s as title};
