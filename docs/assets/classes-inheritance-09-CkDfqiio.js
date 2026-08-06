const e="13-oop-classes-inheritance-09",t="Getter/Setter",s=`class Temperature {
  #celsius;
  constructor(c) { this.#celsius = c; }
  get fahrenheit() {
    return this.#celsius * 9/5 + 32;
  }
}
console.log(new Temperature(100).fahrenheit);`,n=`class Temperature {
  #celsius;
  constructor(c) { this.#celsius = c; }
  get fahrenheit() {
    return this.#celsius * 9/5 + 32;
  }
}
console.log(new Temperature(100).fahrenheit);`,r=[{input:[],expected:"212"}],c=["get creates getter property","Access like a property, not method"],o={id:e,title:t,starterCode:s,solution:n,tests:r,hints:c};export{o as default,c as hints,e as id,n as solution,s as starterCode,r as tests,t as title};
