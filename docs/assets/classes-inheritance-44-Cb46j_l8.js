const e="13-oop-classes-inheritance-44",s="Setter Property",t=`class Temperature {
  #celsius = 0;
  set fahrenheit(f) { this.#celsius = (f - 32) * 5/9; }
  get celsius() { return this.#celsius; }
}
const t = new Temperature();
t.fahrenheit = 212;
console.log(t.celsius);`,n=`class Temperature {
  #celsius = 0;
  set fahrenheit(f) { this.#celsius = (f - 32) * 5/9; }
  get celsius() { return this.#celsius; }
}
const t = new Temperature();
t.fahrenheit = 212;
console.log(t.celsius);`,i=[{input:[],expected:"100"}],r=["set creates setter","Converts and stores"],c={id:e,title:s,starterCode:t,solution:n,tests:i,hints:r};export{c as default,r as hints,e as id,n as solution,t as starterCode,i as tests,s as title};
