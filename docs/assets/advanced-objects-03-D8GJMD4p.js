const e="08-objects-advanced-objects-03",n="Getter Setter",t=`const obj = {
  _name: 'Alice',
  get name() { return this._name; },
  set name(val) { this._name = val; }
};
console.log(obj.name);
obj.name = 'Bob';
console.log(obj.name);`,o=`const obj = {
  _name: 'Alice',
  get name() { return this._name; },
  set name(val) { this._name = val; }
};
console.log(obj.name);
obj.name = 'Bob';
console.log(obj.name);`,s=[{input:[],expected:`Alice
Bob`}],a=["get/set accessors","Encapsulate property"],c={id:e,title:n,starterCode:t,solution:o,tests:s,hints:a};export{c as default,a as hints,e as id,o as solution,t as starterCode,s as tests,n as title};
