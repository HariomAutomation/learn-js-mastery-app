const t="13-oop-prototypes-this-38",e="Prototype Method",n=`function Animal(name) { this.name = name; }
Animal.prototype.speak = function() { return this.name + ' speaks'; };
console.log(new Animal('Cat').speak());`,s=`function Animal(name) { this.name = name; }
Animal.prototype.speak = function() { return this.name + ' speaks'; };
console.log(new Animal('Cat').speak());`,o=[{input:[],expected:"Cat speaks"}],a=["Methods on prototype are shared","this refers to instance"],i={id:t,title:e,starterCode:n,solution:s,tests:o,hints:a};export{i as default,a as hints,t as id,s as solution,n as starterCode,o as tests,e as title};
