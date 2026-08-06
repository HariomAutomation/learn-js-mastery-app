const t="06-functions-arrow-functions-48",s="Arrow In Filter Chain",n=`const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = nums.filter(x => x > 3).filter(x => x % 2 === 0);
console.log(result);`,o=`const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = nums.filter(x => x > 3).filter(x => x % 2 === 0);
console.log(result);`,e=[{input:[],expected:"[ 4, 6, 8, 10 ]"}],r=["Chain filters","Each arrow callback"],l={id:t,title:s,starterCode:n,solution:o,tests:e,hints:r};export{l as default,r as hints,t as id,o as solution,n as starterCode,e as tests,s as title};
