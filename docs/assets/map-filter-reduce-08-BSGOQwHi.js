const t="07-arrays-map-filter-reduce-08",s="Reduce to String",o=`const arr = ['Hello', ' ', 'World', '!'];
const str = arr.____((acc, s) => acc + s, '');
console.log(str);`,e=`const arr = ['Hello', ' ', 'World', '!'];
const str = arr.reduce((acc, s) => acc + s, '');
console.log(str);`,r=[{input:[],expected:"Hello World!"}],c=["Concatenate strings","Start with empty string"],n={id:t,title:s,starterCode:o,solution:e,tests:r,hints:c};export{n as default,c as hints,t as id,e as solution,o as starterCode,r as tests,s as title};
