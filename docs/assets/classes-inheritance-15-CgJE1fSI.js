const t="13-oop-classes-inheritance-15",s="Method Chaining",n=`class Builder {
  constructor() { this.parts = []; }
  add(part) { this.parts.push(part); return this; }
  build() { return this.parts.join('-'); }
}
console.log(new Builder().add('a').add('b').build());`,r=`class Builder {
  constructor() { this.parts = []; }
  add(part) { this.parts.push(part); return this; }
  build() { return this.parts.join('-'); }
}
console.log(new Builder().add('a').add('b').build());`,e=[{input:[],expected:"a-b"}],i=["Return this for chaining","Each method returns instance"],a={id:t,title:s,starterCode:n,solution:r,tests:e,hints:i};export{a as default,i as hints,t as id,r as solution,n as starterCode,e as tests,s as title};
