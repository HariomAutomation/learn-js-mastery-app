const n="13-oop-oop-patterns-21",e="Composite",t=`class Component {
  operation() { return 0; }
}
class Leaf extends Component {
  constructor(val) { super(); this.val = val; }
  operation() { return this.val; }
}
class Composite extends Component {
  constructor() { super(); this.children = []; }
  add(child) { this.children.push(child); }
  operation() { return this.children.reduce((s, c) => s + c.operation(), 0); }
}
const tree = new Composite();
tree.add(new Leaf(1));
tree.add(new Leaf(2));
console.log(tree.operation());`,o=`class Component {
  operation() { return 0; }
}
class Leaf extends Component {
  constructor(val) { super(); this.val = val; }
  operation() { return this.val; }
}
class Composite extends Component {
  constructor() { super(); this.children = []; }
  add(child) { this.children.push(child); }
  operation() { return this.children.reduce((s, c) => s + c.operation(), 0); }
}
const tree = new Composite();
tree.add(new Leaf(1));
tree.add(new Leaf(2));
console.log(tree.operation());`,s=[{input:[],expected:"3"}],r=["Tree structure of components","Composite contains children"],i={id:n,title:e,starterCode:t,solution:o,tests:s,hints:r};export{i as default,r as hints,n as id,o as solution,t as starterCode,s as tests,e as title};
