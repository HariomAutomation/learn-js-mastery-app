const s="13-oop-classes-inheritance-25",t="Class Get/Set",r=`class Circle {
  #radius;
  constructor(r) { this.#radius = r; }
  get radius() { return this.#radius; }
  set radius(r) { if (r > 0) this.#radius = r; }
}
const c = new Circle(5);
c.radius = 10;
console.log(c.radius);`,n=`class Circle {
  #radius;
  constructor(r) { this.#radius = r; }
  get radius() { return this.#radius; }
  set radius(r) { if (r > 0) this.#radius = r; }
}
const c = new Circle(5);
c.radius = 10;
console.log(c.radius);`,e=[{input:[],expected:"10"}],i=["Getter returns value","Setter validates and sets"],c={id:s,title:t,starterCode:r,solution:n,tests:e,hints:i};export{c as default,i as hints,s as id,n as solution,r as starterCode,e as tests,t as title};
