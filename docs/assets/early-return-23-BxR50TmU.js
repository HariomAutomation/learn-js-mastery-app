const t="04-control-flow-early-return-23",n="Multiple guards - no method",o=`function processPayment(amount, method) {
  if (amount <= 0) return 'invalid amount';
  if (!method) return 'no payment method';
  if (amount > 10000) return 'amount too large';
  return \`paid \${amount} via \${method}\`;
}
console.log(processPayment(500, null));`,e=`function processPayment(amount, method) {
  if (amount <= 0) return 'invalid amount';
  if (!method) return 'no payment method';
  if (amount > 10000) return 'amount too large';
  return \`paid \${amount} via \${method}\`;
}
console.log(processPayment(500, null));`,r=[{input:[],expected:"no payment method"}],a=["500 > 0, first guard passes","null is falsy, second guard triggers"],s={id:t,title:n,starterCode:o,solution:e,tests:r,hints:a};export{s as default,a as hints,t as id,e as solution,o as starterCode,r as tests,n as title};
