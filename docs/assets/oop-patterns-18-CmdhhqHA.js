const t="13-oop-oop-patterns-18",n="Memento",e=`class Editor {
  constructor() { this.content = ''; }
  type(words) { this.content += words; }
  save() { return { content: this.content }; }
  restore(state) { this.content = state.content; }
}
const e = new Editor();
e.type('hello ');
const snapshot = e.save();
e.type('world');
e.restore(snapshot);
console.log(e.content);`,o=`class Editor {
  constructor() { this.content = ''; }
  type(words) { this.content += words; }
  save() { return { content: this.content }; }
  restore(state) { this.content = state.content; }
}
const e = new Editor();
e.type('hello ');
const snapshot = e.save();
e.type('world');
e.restore(snapshot);
console.log(e.content);`,s=[{input:[],expected:"hello "}],r=["Save creates snapshot","Restore reverts to snapshot"],c={id:t,title:n,starterCode:e,solution:o,tests:s,hints:r};export{c as default,r as hints,t as id,o as solution,e as starterCode,s as tests,n as title};
