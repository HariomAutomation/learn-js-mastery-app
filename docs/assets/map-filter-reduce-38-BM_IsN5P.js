const t="07-arrays-map-filter-reduce-38",s="Filter Divisible",e=`const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const div3 = nums.____(x => x % 3 === 0);
console.log(div3);`,i=`const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const div3 = nums.filter(x => x % 3 === 0);
console.log(div3);`,n=[{input:[],expected:"[ 3, 6, 9 ]"}],o=["Check divisibility by 3","Remainder is 0"],c={id:t,title:s,starterCode:e,solution:i,tests:n,hints:o};export{c as default,o as hints,t as id,i as solution,e as starterCode,n as tests,s as title};
