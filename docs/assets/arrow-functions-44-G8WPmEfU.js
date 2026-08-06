const t="06-functions-arrow-functions-44",s="Arrow Multiple Statements",o=`const process = (a, b) => {
  const sum = a + b;
  const product = a * b;
  return { sum, product };
};
const result = process(2, 3);
console.log(result.sum + ' ' + result.product);`,n=`const process = (a, b) => {
  const sum = a + b;
  const product = a * b;
  return { sum, product };
};
const result = process(2, 3);
console.log(result.sum + ' ' + result.product);`,c=[{input:[],expected:"5 6"}],e=["Block body","Return object"],r={id:t,title:s,starterCode:o,solution:n,tests:c,hints:e};export{r as default,e as hints,t as id,n as solution,o as starterCode,c as tests,s as title};
