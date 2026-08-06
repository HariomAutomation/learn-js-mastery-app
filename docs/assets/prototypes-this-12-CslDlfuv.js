const o="13-oop-prototypes-this-12",n="This Binding Patterns",t=`const obj = {
  name: 'John',
  regular() { console.log(this.name); },
  arrow: () => { console.log(this.name); }
};
obj.regular();`,s=`const obj = {
  name: 'John',
  regular() { console.log(this.name); },
  arrow: () => { console.log(this.name); }
};
obj.regular();`,e=[{input:[],expected:"John"}],i=["Regular function: this is obj","Arrow: this is enclosing scope"],r={id:o,title:n,starterCode:t,solution:s,tests:e,hints:i};export{r as default,i as hints,o as id,s as solution,t as starterCode,e as tests,n as title};
