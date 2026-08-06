const s="13-oop-classes-inheritance-17",t="Abstract Pattern",e=`class Shape {
  area() { throw new Error('abstract'); }
}
class Square extends Shape {
  constructor(s) { super(); this.s = s; }
  area() { return this.s * this.s; }
}
console.log(new Square(5).area());`,n=`class Shape {
  area() { throw new Error('abstract'); }
}
class Square extends Shape {
  constructor(s) { super(); this.s = s; }
  area() { return this.s * this.s; }
}
console.log(new Square(5).area());`,a=[{input:[],expected:"25"}],r=["Abstract class throws on abstract method","Subclass must implement"],o={id:s,title:t,starterCode:e,solution:n,tests:a,hints:r};export{o as default,r as hints,s as id,n as solution,e as starterCode,a as tests,t as title};
