const n="08-objects-advanced-objects-37",t="Symbol ToPrimitive",o=`const money = {
  amount: 100,
  currency: 'USD',
  [Symbol.toPrimitive](hint) {
    if (hint === 'string') return \`\${this.amount} \${this.currency}\`;
    return this.amount;
  }
};
console.log(money + 50);
console.log(String(money));`,e=`const money = {
  amount: 100,
  currency: 'USD',
  [Symbol.toPrimitive](hint) {
    if (hint === 'string') return \`\${this.amount} \${this.currency}\`;
    return this.amount;
  }
};
console.log(money + 50);
console.log(String(money));`,i=[{input:[],expected:`150
100 USD`}],s=["Hint determines format","Number or string"],r={id:n,title:t,starterCode:o,solution:e,tests:i,hints:s};export{r as default,s as hints,n as id,e as solution,o as starterCode,i as tests,t as title};
