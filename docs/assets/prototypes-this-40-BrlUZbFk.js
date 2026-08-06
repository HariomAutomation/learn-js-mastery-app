const t="13-oop-prototypes-this-40",n="This in Callback",s=`const obj = {
  name: 'test',
  delayed() {
    setTimeout(function() { console.log(this.name); }.bind(this), 10);
  }
};
obj.delayed();`,e=`const obj = {
  name: 'test',
  delayed() {
    setTimeout(function() { console.log(this.name); }.bind(this), 10);
  }
};
obj.delayed();`,o=[{input:[],expected:"test"}],i=["bind fixes this in callback","Pass context to bind"],c={id:t,title:n,starterCode:s,solution:e,tests:o,hints:i};export{c as default,i as hints,t as id,e as solution,s as starterCode,o as tests,n as title};
