const t="13-oop-prototypes-this-17",o="Prototype Inheritance",n=`function Animal() { this.type = 'animal'; }
function Dog() { Animal.call(this); }
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
const d = new Dog();
console.log(d.type);`,e=`function Animal() { this.type = 'animal'; }
function Dog() { Animal.call(this); }
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
const d = new Dog();
console.log(d.type);`,s=[{input:[],expected:"animal"}],c=["Object.create for prototype chain","Call parent constructor"],i={id:t,title:o,starterCode:n,solution:e,tests:s,hints:c};export{i as default,c as hints,t as id,e as solution,n as starterCode,s as tests,o as title};
