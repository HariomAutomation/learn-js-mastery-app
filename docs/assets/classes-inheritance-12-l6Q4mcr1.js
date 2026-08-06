const s="13-oop-classes-inheritance-12",t="Class Expression",n=`const MyClass = class {
  constructor() { this.val = 42; }
};
console.log(new MyClass().val);`,o=`const MyClass = class {
  constructor() { this.val = 42; }
};
console.log(new MyClass().val);`,e=[{input:[],expected:"42"}],l=["Classes can be expressions","Assign to variable"],a={id:s,title:t,starterCode:n,solution:o,tests:e,hints:l};export{a as default,l as hints,s as id,o as solution,n as starterCode,e as tests,t as title};
