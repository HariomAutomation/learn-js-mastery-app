const t="04-control-flow-early-return-22",n="Multiple guards pattern",o=`function processPayment(amount, method) {
  if (amount <= 0) return 'invalid amount';
  if (!method) return 'no payment method';
  if (amount > 10000) return 'amount too large';
  return \`paid \${amount} via \${method}\`;
}
console.log(processPayment(500, 'card'));`,e=`function processPayment(amount, method) {
  if (amount <= 0) return 'invalid amount';
  if (!method) return 'no payment method';
  if (amount > 10000) return 'amount too large';
  return \`paid \${amount} via \${method}\`;
}
console.log(processPayment(500, 'card'));`,a=[{input:[],expected:"paid 500 via card"}],r=["500 > 0, first guard passes","method is truthy, second passes","500 <= 10000, third passes"],s={id:t,title:n,starterCode:o,solution:e,tests:a,hints:r};export{s as default,r as hints,t as id,e as solution,o as starterCode,a as tests,n as title};
