const n="13-oop-prototypes-this-15",t="This in Callback",o=`const obj = {
  name: 'John',
  delayed() {
    setTimeout(function() {
      console.log(this.name);
    }, 10);
  }
};
obj.delayed();`,e=`const obj = {
  name: 'John',
  delayed() {
    setTimeout(function() {
      console.log(this.name);
    }, 10);
  }
};
obj.delayed();`,s=[{input:[],expected:"undefined"}],i=["Callback loses this binding","this becomes global"],l={id:n,title:t,starterCode:o,solution:e,tests:s,hints:i};export{l as default,i as hints,n as id,e as solution,o as starterCode,s as tests,t as title};
