const t="13-oop-oop-patterns-12",n="Adapter",e=`class OldAPI {
  getData() { return { first: 'John', last: 'Doe' }; }
}
class NewAPI {
  constructor(old) { this.old = old; }
  getFullName() {
    const d = this.old.getData();
    return d.first + ' ' + d.last;
  }
}
console.log(new NewAPI(new OldAPI()).getFullName());`,o=`class OldAPI {
  getData() { return { first: 'John', last: 'Doe' }; }
}
class NewAPI {
  constructor(old) { this.old = old; }
  getFullName() {
    const d = this.old.getData();
    return d.first + ' ' + d.last;
  }
}
console.log(new NewAPI(new OldAPI()).getFullName());`,s=[{input:[],expected:"John Doe"}],l=["Adapter wraps old interface","Converts to new interface"],a={id:t,title:n,starterCode:e,solution:o,tests:s,hints:l};export{a as default,l as hints,t as id,o as solution,e as starterCode,s as tests,n as title};
