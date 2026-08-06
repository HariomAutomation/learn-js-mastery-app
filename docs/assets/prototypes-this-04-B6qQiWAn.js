const t="13-oop-prototypes-this-04",o="This in Object Method",n=`const obj = {
  name: 'John',
  greet() {
    console.log(this.name);
  }
};
obj.greet();`,e=`const obj = {
  name: 'John',
  greet() {
    console.log(this.name);
  }
};
obj.greet();`,s=[{input:[],expected:"John"}],i=["this refers to calling object","obj is calling greet"],c={id:t,title:o,starterCode:n,solution:e,tests:s,hints:i};export{c as default,i as hints,t as id,e as solution,n as starterCode,s as tests,o as title};
