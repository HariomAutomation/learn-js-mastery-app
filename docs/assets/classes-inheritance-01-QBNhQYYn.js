const t="13-oop-classes-inheritance-01",n="Class Declaration",s=`class Animal {
  // TODO: add constructor
}
const a = new Animal();
console.log(typeof a);`,o=`class Animal {
  constructor() {
    this.type = 'animal';
  }
}
const a = new Animal();
console.log(typeof a);`,e=[{input:[],expected:"object"}],c=["Class creates a constructor function","typeof object for instances"],a={id:t,title:n,starterCode:s,solution:o,tests:e,hints:c};export{a as default,c as hints,t as id,o as solution,s as starterCode,e as tests,n as title};
