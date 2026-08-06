const t="13-oop-prototypes-this-21",n="This Lost",o=`const obj = {
  name: 'John',
  greet() { console.log(this.name); }
};
const fn = obj.greet;
fn();`,s=`const obj = {
  name: 'John',
  greet() { console.log(this.name); }
};
const fn = obj.greet;
fn();`,e=[{input:[],expected:"undefined"}],i=["this is lost when function is extracted","Use bind to fix"],c={id:t,title:n,starterCode:o,solution:s,tests:e,hints:i};export{c as default,i as hints,t as id,s as solution,o as starterCode,e as tests,n as title};
