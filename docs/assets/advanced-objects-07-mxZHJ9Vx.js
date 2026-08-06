const e="08-objects-advanced-objects-07",t="Object Create with Prototype",s=`const animal = {speak() { return this.name + ' speaks'; }};
const dog = Object.create(animal);
dog.name = 'Rex';
console.log(dog.speak());`,n=`const animal = {speak() { return this.name + ' speaks'; }};
const dog = Object.create(animal);
dog.name = 'Rex';
console.log(dog.speak());`,o=[{input:[],expected:"Rex speaks"}],a=["Inherit speak method","Set name property"],c={id:e,title:t,starterCode:s,solution:n,tests:o,hints:a};export{c as default,a as hints,e as id,n as solution,s as starterCode,o as tests,t as title};
