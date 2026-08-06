const t="05-loops-for-while-16",o="Loop Accumulation",i=`let product = 1;
for (let i = 1; i <= 5; i++) {
  product *= i;
}
console.log(product);`,n=`let product = 1;
for (let i = 1; i <= 5; i++) {
  product *= i;
}
console.log(product);`,e=[{input:[],expected:"120"}],s=["Initialize product to 1","Multiply each i"],c={id:t,title:o,starterCode:i,solution:n,tests:e,hints:s};export{c as default,s as hints,t as id,n as solution,i as starterCode,e as tests,o as title};
