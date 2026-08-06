const t="08-objects-advanced-objects-22",o="Symbol.toPrimitive",n=`const obj = {
  val: 42,
  [Symbol.toPrimitive](hint) {
    return hint === 'number' ? this.val : String(this.val);
  }
};
console.log(+obj);
console.log(\`\${obj}\`);`,i=`const obj = {
  val: 42,
  [Symbol.toPrimitive](hint) {
    return hint === 'number' ? this.val : String(this.val);
  }
};
console.log(+obj);
console.log(\`\${obj}\`);`,s=[{input:[],expected:`42
42`}],e=["Symbol.toPrimitive controls","Conversion behavior"],l={id:t,title:o,starterCode:n,solution:i,tests:s,hints:e};export{l as default,e as hints,t as id,i as solution,n as starterCode,s as tests,o as title};
