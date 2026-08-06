const e="08-objects-advanced-objects-29",t="Property Practice",n=`const obj = {name: 'Alice', age: 25};
Object.defineProperty(obj, 'greeting', {
  get() { return \`Hi, \${this.name}\`; },
  enumerable: true
});
console.log(obj.greeting);`,o=`const obj = {name: 'Alice', age: 25};
Object.defineProperty(obj, 'greeting', {
  get() { return \`Hi, \${this.name}\`; },
  enumerable: true
});
console.log(obj.greeting);`,i=[{input:[],expected:"Hi, Alice"}],s=["Define getter","Dynamic greeting"],r={id:e,title:t,starterCode:n,solution:o,tests:i,hints:s};export{r as default,s as hints,e as id,o as solution,n as starterCode,i as tests,t as title};
