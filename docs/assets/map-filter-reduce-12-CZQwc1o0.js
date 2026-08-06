const t="07-arrays-map-filter-reduce-12",s="Filter Callback",e=`const arr = [1, 2, 3, 4, 5, 6];
const odds = arr.____(x => x % 2 !== 0);
console.log(odds);`,o=`const arr = [1, 2, 3, 4, 5, 6];
const odds = arr.filter(x => x % 2 !== 0);
console.log(odds);`,n=[{input:[],expected:"[ 1, 3, 5 ]"}],r=["Filter keeps odd numbers","Check remainder"],d={id:t,title:s,starterCode:e,solution:o,tests:n,hints:r};export{d as default,r as hints,t as id,o as solution,e as starterCode,n as tests,s as title};
