const o="06-functions-arrow-functions-50",t="Arrow Class Method Warning",s=`class Foo {
  constructor() { this.val = 10; }
  getVal = () => this.val;
}
const foo = new Foo();
console.log(foo.getVal());`,n=`class Foo {
  constructor() { this.val = 10; }
  getVal = () => this.val;
}
const foo = new Foo();
console.log(foo.getVal());`,e=[{input:[],expected:"10"}],c=["Arrow as class field","Lexical this works here"],l={id:o,title:t,starterCode:s,solution:n,tests:e,hints:c};export{l as default,c as hints,o as id,n as solution,s as starterCode,e as tests,t as title};
