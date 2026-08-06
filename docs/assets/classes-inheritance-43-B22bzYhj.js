const t="13-oop-classes-inheritance-43",e="Getter Property",s=`class Rectangle {
  constructor(w, h) { this.w = w; this.h = h; }
  get area() { return this.w * this.h; }
}
console.log(new Rectangle(3, 4).area);`,n=`class Rectangle {
  constructor(w, h) { this.w = w; this.h = h; }
  get area() { return this.w * this.h; }
}
console.log(new Rectangle(3, 4).area);`,o=[{input:[],expected:"12"}],c=["get creates getter","Access like property"],r={id:t,title:e,starterCode:s,solution:n,tests:o,hints:c};export{r as default,c as hints,t as id,n as solution,s as starterCode,o as tests,e as title};
