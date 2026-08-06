const t="13-oop-oop-patterns-47",e="Memento Pattern",s=`class Editor {
  constructor() { this.text = ''; }
  type(t) { this.text += t; }
  save() { return { text: this.text }; }
  restore(s) { this.text = s.text; }
}
const e = new Editor();
e.type('a ');
const snap = e.save();
e.type('b');
e.restore(snap);
console.log(e.text);`,n=`class Editor {
  constructor() { this.text = ''; }
  type(t) { this.text += t; }
  save() { return { text: this.text }; }
  restore(s) { this.text = s.text; }
}
const e = new Editor();
e.type('a ');
const snap = e.save();
e.type('b');
e.restore(snap);
console.log(e.text);`,o=[{input:[],expected:"a "}],r=["Save creates snapshot","Restore reverts to snapshot"],a={id:t,title:e,starterCode:s,solution:n,tests:o,hints:r};export{a as default,r as hints,t as id,n as solution,s as starterCode,o as tests,e as title};
