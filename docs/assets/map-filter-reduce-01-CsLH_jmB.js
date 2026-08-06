const t="07-arrays-map-filter-reduce-01",e="Map Transform",s=`const nums = [1, 2, 3];
const doubled = nums.____(x => x * 2);
console.log(doubled);`,n=`const nums = [1, 2, 3];
const doubled = nums.map(x => x * 2);
console.log(doubled);`,o=[{input:[],expected:"[ 2, 4, 6 ]"}],c=["map transforms each element","Return new value"],l={id:t,title:e,starterCode:s,solution:n,tests:o,hints:c};export{l as default,c as hints,t as id,n as solution,s as starterCode,o as tests,e as title};
