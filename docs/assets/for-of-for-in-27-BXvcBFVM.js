const n="05-loops-for-of-for-in-27",o="For...In Own Keys Only",e=`function Person(name) { this.name = name; }
Person.prototype.age = 25;
const p = new Person('John');
for (const key in p) {
  if (p.hasOwnProperty(key)) {
    console.log(key);
  }
}`,t=`function Person(name) { this.name = name; }
Person.prototype.age = 25;
const p = new Person('John');
for (const key in p) {
  if (p.hasOwnProperty(key)) {
    console.log(key);
  }
}`,s=[{input:[],expected:"name"}],r=["prototype properties are inherited","hasOwnProperty filters them"],i={id:n,title:o,starterCode:e,solution:t,tests:s,hints:r};export{i as default,r as hints,n as id,t as solution,e as starterCode,s as tests,o as title};
