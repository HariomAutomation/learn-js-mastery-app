const n="06-functions-arrow-functions-09",t="Arrow This Binding",o=`const obj = {
  name: 'Alice',
  greet: () => {
    console.log('Hello ' + this.name);
  }
};
obj.greet();`,e=`const obj = {
  name: 'Alice',
  greet: () => {
    console.log('Hello ' + this.name);
  }
};
obj.greet();`,s=[{input:[],expected:"Hello undefined"}],i=["Arrow has lexical this","this is outer scope"],c={id:n,title:t,starterCode:o,solution:e,tests:s,hints:i};export{c as default,i as hints,n as id,e as solution,o as starterCode,s as tests,t as title};
