const o="06-functions-arrow-functions-30",s="Arrow Some Every",n=`const nums = [2, 4, 6, 8];
console.log(nums.every(x => x % 2 === 0));
console.log(nums.some(x => x > 5));`,t=`const nums = [2, 4, 6, 8];
console.log(nums.every(x => x % 2 === 0));
console.log(nums.some(x => x > 5));`,e=[{input:[],expected:`true
true`}],c=["every checks all","some checks any"],r={id:o,title:s,starterCode:n,solution:t,tests:e,hints:c};export{r as default,c as hints,o as id,t as solution,n as starterCode,e as tests,s as title};
