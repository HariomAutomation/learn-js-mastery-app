const t="13-oop-prototypes-this-28",o="instanceof Polyfill",e=`function myInstanceof(obj, Constructor) {
  let proto = Object.getPrototypeOf(obj);
  while (proto !== null) {
    if (proto === Constructor.prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
  return false;
}
console.log(myInstanceof(new Date(), Date));`,n=`function myInstanceof(obj, Constructor) {
  let proto = Object.getPrototypeOf(obj);
  while (proto !== null) {
    if (proto === Constructor.prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
  return false;
}
console.log(myInstanceof(new Date(), Date));`,r=[{input:[],expected:"true"}],s=["Walk up prototype chain","Compare with Constructor.prototype"],p={id:t,title:o,starterCode:e,solution:n,tests:r,hints:s};export{p as default,s as hints,t as id,n as solution,e as starterCode,r as tests,o as title};
