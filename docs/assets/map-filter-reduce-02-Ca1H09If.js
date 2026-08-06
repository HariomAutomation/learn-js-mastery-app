const e="07-arrays-map-filter-reduce-02",t="Filter Elements",s=`const nums = [1, 2, 3, 4, 5];
const evens = nums.____(x => x % 2 === 0);
console.log(evens);`,n=`const nums = [1, 2, 3, 4, 5];
const evens = nums.filter(x => x % 2 === 0);
console.log(evens);`,o=[{input:[],expected:"[ 2, 4 ]"}],c=["filter keeps elements","Return true to include"],l={id:e,title:t,starterCode:s,solution:n,tests:o,hints:c};export{l as default,c as hints,e as id,n as solution,s as starterCode,o as tests,t as title};
