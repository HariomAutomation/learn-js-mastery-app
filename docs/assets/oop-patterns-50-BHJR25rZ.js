const t="13-oop-oop-patterns-50",e="Composite Pattern",s=`class Item { price() { return 0; } }
class Product extends Item {
  constructor(p) { super(); this.p = p; }
  price() { return this.p; }
}
class Box extends Item {
  constructor() { super(); this.items = []; }
  add(i) { this.items.push(i); }
  price() { return this.items.reduce((s, i) => s + i.price(), 0); }
}
const box = new Box();
box.add(new Product(10));
box.add(new Product(20));
console.log(box.price());`,n=`class Item { price() { return 0; } }
class Product extends Item {
  constructor(p) { super(); this.p = p; }
  price() { return this.p; }
}
class Box extends Item {
  constructor() { super(); this.items = []; }
  add(i) { this.items.push(i); }
  price() { return this.items.reduce((s, i) => s + i.price(), 0); }
}
const box = new Box();
box.add(new Product(10));
box.add(new Product(20));
console.log(box.price());`,o=[{input:[],expected:"30"}],r=["Tree structure","Composite contains children"],c={id:t,title:e,starterCode:s,solution:n,tests:o,hints:r};export{c as default,r as hints,t as id,n as solution,s as starterCode,o as tests,e as title};
