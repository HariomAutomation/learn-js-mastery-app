const t="07-arrays-array-methods-28",s="Entries",e=`const arr = ['x', 'y', 'z'];
const entries = arr.____();
console.log([...entries]);`,n=`const arr = ['x', 'y', 'z'];
const entries = arr.entries();
console.log([...entries]);`,r=[{input:[],expected:"[ [ 0, 'x' ], [ 1, 'y' ], [ 2, 'z' ] ]"}],o=["entries() returns [index, value]","Spread to see pairs"],i={id:t,title:s,starterCode:e,solution:n,tests:r,hints:o};export{i as default,o as hints,t as id,n as solution,e as starterCode,r as tests,s as title};
