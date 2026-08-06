const t="06-functions-arrow-functions-15",s="Multiline Arrow",n=`const process = (a, b) => {
  const sum = a + b;
  const product = a * b;
  return { sum, product };
};
const result = process(2, 3);
console.log(result.sum + ' ' + result.product);`,o=`const process = (a, b) => {
  const sum = a + b;
  const product = a * b;
  return { sum, product };
};
const result = process(2, 3);
console.log(result.sum + ' ' + result.product);`,r=[{input:[],expected:"5 6"}],c=["Use braces for multi-line","Explicit return"],e={id:t,title:s,starterCode:n,solution:o,tests:r,hints:c};export{e as default,c as hints,t as id,o as solution,n as starterCode,r as tests,s as title};
