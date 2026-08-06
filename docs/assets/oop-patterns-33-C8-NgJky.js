const n="13-oop-oop-patterns-33",t="Singleton",e=`class Singleton {
  static instance;
  constructor() {
    if (Singleton.instance) return Singleton.instance;
    Singleton.instance = this;
  }
}
const a = new Singleton();
const b = new Singleton();
console.log(a === b);`,o=`class Singleton {
  static instance;
  constructor() {
    if (Singleton.instance) return Singleton.instance;
    Singleton.instance = this;
  }
}
const a = new Singleton();
const b = new Singleton();
console.log(a === b);`,s=[{input:[],expected:"true"}],i=["Only one instance exists","Check if instance already created"],c={id:n,title:t,starterCode:e,solution:o,tests:s,hints:i};export{c as default,i as hints,n as id,o as solution,e as starterCode,s as tests,t as title};
