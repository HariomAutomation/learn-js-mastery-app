const e="13-oop-classes-inheritance-10",t="Setter",n=`class Person {
  #age = 0;
  set age(val) {
    if (val >= 0) this.#age = val;
  }
  get age() { return this.#age; }
}
const p = new Person();
p.age = 25;
console.log(p.age);`,s=`class Person {
  #age = 0;
  set age(val) {
    if (val >= 0) this.#age = val;
  }
  get age() { return this.#age; }
}
const p = new Person();
p.age = 25;
console.log(p.age);`,a=[{input:[],expected:"25"}],o=["set creates setter","Can validate before setting"],i={id:e,title:t,starterCode:n,solution:s,tests:a,hints:o};export{i as default,o as hints,e as id,s as solution,n as starterCode,a as tests,t as title};
