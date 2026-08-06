const t="06-functions-arrow-functions-28",n="Arrow Chaining",s=`const result = [1, 2, 3, 4, 5]
  .filter(x => x > 2)
  .map(x => x * 10);
console.log(result);`,o=`const result = [1, 2, 3, 4, 5]
  .filter(x => x > 2)
  .map(x => x * 10);
console.log(result);`,e=[{input:[],expected:"[ 30, 40, 50 ]"}],r=["Chain array methods","Filter then map"],i={id:t,title:n,starterCode:s,solution:o,tests:e,hints:r};export{i as default,r as hints,t as id,o as solution,s as starterCode,e as tests,n as title};
