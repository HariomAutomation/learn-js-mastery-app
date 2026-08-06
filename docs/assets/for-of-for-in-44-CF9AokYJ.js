const n="05-loops-for-of-for-in-44",t="For...In Prototype Skip",o=`function Animal(name) { this.name = name; }
Animal.prototype.type = 'animal';
const cat = new Animal('Whiskers');
for (const key in cat) {
  if (cat.hasOwnProperty(key)) {
    console.log(key + ': ' + cat[key]);
  }
}`,e=`function Animal(name) { this.name = name; }
Animal.prototype.type = 'animal';
const cat = new Animal('Whiskers');
for (const key in cat) {
  if (cat.hasOwnProperty(key)) {
    console.log(key + ': ' + cat[key]);
  }
}`,s=[{input:[],expected:"name: Whiskers"}],i=["prototype properties skipped","Only own properties"],a={id:n,title:t,starterCode:o,solution:e,tests:s,hints:i};export{a as default,i as hints,n as id,e as solution,o as starterCode,s as tests,t as title};
