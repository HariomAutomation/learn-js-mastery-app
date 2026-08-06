const t="13-oop-oop-patterns-48",s="Visitor Pattern",e=`class Shape { accept(v) { return v.visit(this); } }
class Rect extends Shape {
  constructor(w, h) { super(); this.w = w; this.h = h; }
}
class AreaV { visit(r) { return r.w * r.h; } }
console.log(new Rect(3, 4).accept(new AreaV()));`,n=`class Shape { accept(v) { return v.visit(this); } }
class Rect extends Shape {
  constructor(w, h) { super(); this.w = w; this.h = h; }
}
class AreaV { visit(r) { return r.w * r.h; } }
console.log(new Rect(3, 4).accept(new AreaV()));`,r=[{input:[],expected:"12"}],c=["Visitor adds operations","accept calls visitor.visit"],o={id:t,title:s,starterCode:e,solution:n,tests:r,hints:c};export{o as default,c as hints,t as id,n as solution,e as starterCode,r as tests,s as title};
