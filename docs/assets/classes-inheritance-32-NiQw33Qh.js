const e="13-oop-classes-inheritance-32",t="Private Field Access",s=`class Secret {
  #value = 'hidden';
  getValue() { return this.#value; }
}
const s = new Secret();
console.log(s.getValue());`,n=`class Secret {
  #value = 'hidden';
  getValue() { return this.#value; }
}
const s = new Secret();
console.log(s.getValue());`,o=[{input:[],expected:"hidden"}],c=["Private fields accessible via methods","Not directly from outside"],i={id:e,title:t,starterCode:s,solution:n,tests:o,hints:c};export{i as default,c as hints,e as id,n as solution,s as starterCode,o as tests,t as title};
