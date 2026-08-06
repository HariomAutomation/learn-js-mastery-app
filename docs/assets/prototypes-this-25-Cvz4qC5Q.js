const t="13-oop-prototypes-this-25",o="This Arrow Fix",n=`const obj = {
  name: 'John',
  delayed() {
    setTimeout(() => {
      console.log(this.name);
    }, 10);
  }
};
obj.delayed();`,e=`const obj = {
  name: 'John',
  delayed() {
    setTimeout(() => {
      console.log(this.name);
    }, 10);
  }
};
obj.delayed();`,s=[{input:[],expected:"John"}],i=["Arrow function captures this","Use arrow for callbacks"],a={id:t,title:o,starterCode:n,solution:e,tests:s,hints:i};export{a as default,i as hints,t as id,e as solution,n as starterCode,s as tests,o as title};
