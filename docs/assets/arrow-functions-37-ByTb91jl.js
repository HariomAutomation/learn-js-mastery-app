const s="06-functions-arrow-functions-37",t="Arrow Rest Params",o=`const sum = (...nums) => nums.reduce((a, b) => a + b, 0);
console.log(sum(1, 2, 3, 4, 5));`,n=`const sum = (...nums) => nums.reduce((a, b) => a + b, 0);
console.log(sum(1, 2, 3, 4, 5));`,e=[{input:[],expected:"15"}],c=["Rest collects args","Reduce to sum"],u={id:s,title:t,starterCode:o,solution:n,tests:e,hints:c};export{u as default,c as hints,s as id,n as solution,o as starterCode,e as tests,t as title};
