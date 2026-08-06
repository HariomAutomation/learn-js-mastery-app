const t="13-oop-oop-patterns-19",s="Visitor",i=`class Shape {
  accept(visitor) { return visitor.visit(this); }
}
class Circle extends Shape {
  constructor(r) { super(); this.r = r; }
}
class AreaVisitor {
  visit(circle) { return Math.PI * circle.r * circle.r; }
}
console.log(new Circle(5).accept(new AreaVisitor()));`,r=`class Shape {
  accept(visitor) { return visitor.visit(this); }
}
class Circle extends Shape {
  constructor(r) { super(); this.r = r; }
}
class AreaVisitor {
  visit(circle) { return Math.PI * circle.r * circle.r; }
}
console.log(new Circle(5).accept(new AreaVisitor()));`,e=[{input:[],expected:"78.53981633974483"}],n=["Visitor adds operations without modifying","accept calls visitor.visit"],c={id:t,title:s,starterCode:i,solution:r,tests:e,hints:n};export{c as default,n as hints,t as id,r as solution,i as starterCode,e as tests,s as title};
