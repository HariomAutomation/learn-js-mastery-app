const t="07-arrays-array-methods-31",s="Splice Insert Multiple",r=`const arr = ['a', 'd'];
arr.____(1, 0, 'b', 'c');
console.log(arr);`,o=`const arr = ['a', 'd'];
arr.splice(1, 0, 'b', 'c');
console.log(arr);`,e=[{input:[],expected:"[ 'a', 'b', 'c', 'd' ]"}],n=["Insert multiple items","Count is 0 for insert"],a={id:t,title:s,starterCode:r,solution:o,tests:e,hints:n};export{a as default,n as hints,t as id,o as solution,r as starterCode,e as tests,s as title};
