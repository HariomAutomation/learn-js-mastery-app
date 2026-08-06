const t="07-arrays-map-filter-reduce-28",s="Filter Truthy",e=`const arr = [0, 1, false, 2, '', 3];
const truthy = arr.____(Boolean);
console.log(truthy);`,o=`const arr = [0, 1, false, 2, '', 3];
const truthy = arr.filter(Boolean);
console.log(truthy);`,r=[{input:[],expected:"[ 1, 2, 3 ]"}],n=["Boolean as callback","Filters falsy values"],l={id:t,title:s,starterCode:e,solution:o,tests:r,hints:n};export{l as default,n as hints,t as id,o as solution,e as starterCode,r as tests,s as title};
