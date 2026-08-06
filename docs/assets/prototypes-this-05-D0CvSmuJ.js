const t="13-oop-prototypes-this-05",n="This in Arrow",o=`const obj = {
  name: 'John',
  greet: () => {
    console.log(this.name);
  }
};
obj.greet();`,s=`const obj = {
  name: 'John',
  greet: () => {
    console.log(this.name);
  }
};
obj.greet();`,e=[{input:[],expected:"undefined"}],i=["Arrow functions don't bind this","this is lexical (enclosing scope)"],c={id:t,title:n,starterCode:o,solution:s,tests:e,hints:i};export{c as default,i as hints,t as id,s as solution,o as starterCode,e as tests,n as title};
