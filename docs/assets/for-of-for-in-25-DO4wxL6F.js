const t="05-loops-for-of-for-in-25",e="Object Entries Sum",o=`const prices = {apple: 2, banana: 3, orange: 4};
let total = 0;
for (const [fruit, price] of Object.entries(prices)) {
  total += price;
}
console.log(total);`,n=`const prices = {apple: 2, banana: 3, orange: 4};
let total = 0;
for (const [fruit, price] of Object.entries(prices)) {
  total += price;
}
console.log(total);`,s=[{input:[],expected:"9"}],r=["Use Object.entries()","Sum the prices"],c={id:t,title:e,starterCode:o,solution:n,tests:s,hints:r};export{c as default,r as hints,t as id,n as solution,o as starterCode,s as tests,e as title};
