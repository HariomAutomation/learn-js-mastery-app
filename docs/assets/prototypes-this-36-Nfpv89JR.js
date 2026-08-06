const t="13-oop-prototypes-this-36",o="Arrow This",s=`const obj = {
  name: 'test',
  getArrow: () => this.name
};
console.log(obj.getArrow());`,e=`const obj = {
  name: 'test',
  getArrow: () => this.name
};
console.log(obj.getArrow());`,n=[{input:[],expected:"undefined"}],r=["Arrow doesn't bind this","this is from outer scope"],i={id:t,title:o,starterCode:s,solution:e,tests:n,hints:r};export{i as default,r as hints,t as id,e as solution,s as starterCode,n as tests,o as title};
