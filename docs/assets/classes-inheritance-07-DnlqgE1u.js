const e="13-oop-classes-inheritance-07",n="Method Overriding",t=`class Shape {
  area() { return 0; }
}
class Circle extends Shape {
  constructor(r) { super(); this.r = r; }
  area() {
    // TODO: return πr²
  }
}
console.log(new Circle(5).area());`,r=`class Shape {
  area() { return 0; }
}
class Circle extends Shape {
  constructor(r) { super(); this.r = r; }
  area() {
    return Math.PI * this.r * this.r;
  }
}
console.log(new Circle(5).area());`,s=[{input:[],expected:"78.53981633974483"}],a=["Override parent method","Use Math.PI for π"],o={id:e,title:n,starterCode:t,solution:r,tests:s,hints:a};export{o as default,a as hints,e as id,r as solution,t as starterCode,s as tests,n as title};
