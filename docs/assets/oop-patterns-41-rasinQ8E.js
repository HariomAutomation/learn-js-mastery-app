const t="13-oop-oop-patterns-41",e="Adapter Pattern",n=`class OldAPI { getData() { return { f: 'A', l: 'B' }; } }
class Adapter {
  constructor(old) { this.old = old; }
  getName() { const d = this.old.getData(); return d.f + ' ' + d.l; }
}
console.log(new Adapter(new OldAPI()).getName());`,o=`class OldAPI { getData() { return { f: 'A', l: 'B' }; } }
class Adapter {
  constructor(old) { this.old = old; }
  getName() { const d = this.old.getData(); return d.f + ' ' + d.l; }
}
console.log(new Adapter(new OldAPI()).getName());`,s=[{input:[],expected:"A B"}],a=["Adapter wraps old interface","Converts to new interface"],d={id:t,title:e,starterCode:n,solution:o,tests:s,hints:a};export{d as default,a as hints,t as id,o as solution,n as starterCode,s as tests,e as title};
