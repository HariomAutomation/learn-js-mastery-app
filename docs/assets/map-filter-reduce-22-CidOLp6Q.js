const n="07-arrays-map-filter-reduce-22",t="Filter Range",e=`const nums = [1, 5, 10, 15, 20];
const inRange = nums.____(x => x >= 5 && x <= 15);
console.log(inRange);`,s=`const nums = [1, 5, 10, 15, 20];
const inRange = nums.filter(x => x >= 5 && x <= 15);
console.log(inRange);`,o=[{input:[],expected:"[ 5, 10, 15 ]"}],i=["Check range with &&","Filter keeps in range"],c={id:n,title:t,starterCode:e,solution:s,tests:o,hints:i};export{c as default,i as hints,n as id,s as solution,e as starterCode,o as tests,t as title};
