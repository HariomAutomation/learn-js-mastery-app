const s="13-oop-classes-inheritance-28",t="Class Practice",e=`class Stack {
  constructor() { this.items = []; }
  push(item) { this.items.push(item); }
  pop() { return this.items.pop(); }
  peek() { return this.items[this.items.length - 1]; }
}
const s = new Stack();
s.push(1); s.push(2);
console.log(s.pop());`,n=`class Stack {
  constructor() { this.items = []; }
  push(item) { this.items.push(item); }
  pop() { return this.items.pop(); }
  peek() { return this.items[this.items.length - 1]; }
}
const s = new Stack();
s.push(1); s.push(2);
console.log(s.pop());`,i=[{input:[],expected:"2"}],o=["pop removes and returns last","LIFO order"],c={id:s,title:t,starterCode:e,solution:n,tests:i,hints:o};export{c as default,o as hints,s as id,n as solution,e as starterCode,i as tests,t as title};
