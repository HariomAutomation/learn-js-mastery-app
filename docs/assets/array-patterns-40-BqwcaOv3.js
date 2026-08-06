const a="07-arrays-array-patterns-40",t="Sort Stable",r=`const arr = [{id: 1, val: 'b'}, {id: 2, val: 'a'}, {id: 3, val: 'a'}];
arr.sort((a, b) => a.val.localeCompare(b.val) || a.id - b.id);
console.log(arr.map(x => x.id));`,o=`const arr = [{id: 1, val: 'b'}, {id: 2, val: 'a'}, {id: 3, val: 'a'}];
arr.sort((a, b) => a.val.localeCompare(b.val) || a.id - b.id);
console.log(arr.map(x => x.id));`,s=[{input:[],expected:"[ 2, 3, 1 ]"}],e=["Sort by val, then id","Use || for tiebreak"],l={id:a,title:t,starterCode:r,solution:o,tests:s,hints:e};export{l as default,e as hints,a as id,o as solution,r as starterCode,s as tests,t as title};
