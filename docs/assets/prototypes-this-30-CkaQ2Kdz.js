const t="13-oop-prototypes-this-30",o="Prototype Practice",n=`function Car(make) { this.make = make; }
Car.prototype.toString = function() {
  return 'Car: ' + this.make;
};
console.log(new Car('Toyota').toString());`,e=`function Car(make) { this.make = make; }
Car.prototype.toString = function() {
  return 'Car: ' + this.make;
};
console.log(new Car('Toyota').toString());`,s=[{input:[],expected:"Car: Toyota"}],r=["Add methods to prototype","Shared across instances"],a={id:t,title:o,starterCode:n,solution:e,tests:s,hints:r};export{a as default,r as hints,t as id,e as solution,n as starterCode,s as tests,o as title};
