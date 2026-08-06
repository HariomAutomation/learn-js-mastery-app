const s="13-oop-classes-inheritance-50",t="Class Expression",n=`const MyClass = class {
  constructor() { this.val = 99; }
};
console.log(new MyClass().val);`,o=`const MyClass = class {
  constructor() { this.val = 99; }
};
console.log(new MyClass().val);`,e=[{input:[],expected:"99"}],l=["Class expression assigned to variable","Anonymous class"],a={id:s,title:t,starterCode:n,solution:o,tests:e,hints:l};export{a as default,l as hints,s as id,o as solution,n as starterCode,e as tests,t as title};
