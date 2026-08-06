const t="08-objects-advanced-objects-24",e="ValueOf",n=`const obj = {
  val: 10,
  valueOf() { return this.val; }
};
console.log(obj + 5);`,o=`const obj = {
  val: 10,
  valueOf() { return this.val; }
};
console.log(obj + 5);`,s=[{input:[],expected:"15"}],c=["valueOf for primitives","Used in arithmetic"],a={id:t,title:e,starterCode:n,solution:o,tests:s,hints:c};export{a as default,c as hints,t as id,o as solution,n as starterCode,s as tests,e as title};
