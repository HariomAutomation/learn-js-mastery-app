const t="07-arrays-map-filter-reduce-11",s="Map Callback",e=`const nums = [10, 20, 30];
const halved = nums.____(x => x / 2);
console.log(halved);`,n=`const nums = [10, 20, 30];
const halved = nums.map(x => x / 2);
console.log(halved);`,o=[{input:[],expected:"[ 5, 10, 15 ]"}],a=["Map transforms each","Divide by 2"],c={id:t,title:s,starterCode:e,solution:n,tests:o,hints:a};export{c as default,a as hints,t as id,n as solution,e as starterCode,o as tests,s as title};
