const n="13-oop-classes-inheritance-21",s="Symbol.hasInstance",t=`class Even {
  static [Symbol.hasInstance](num) {
    return num % 2 === 0;
  }
}
console.log(4 instanceof Even);`,e=`class Even {
  static [Symbol.hasInstance](num) {
    return num % 2 === 0;
  }
}
console.log(4 instanceof Even);`,o=[{input:[],expected:"true"}],c=["Symbol.hasInstance customizes instanceof","Static method on class"],a={id:n,title:s,starterCode:t,solution:e,tests:o,hints:c};export{a as default,c as hints,n as id,e as solution,t as starterCode,o as tests,s as title};
