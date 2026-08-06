const e="06-functions-closures-iife-07",n="Private Variables",t=`function createPerson(name) {
  let _name = name;
  return {
    getName: () => _name,
    setName: (n) => { _name = n; }
  };
}
const p = createPerson('Alice');
console.log(p.getName());
p.setName('Bob');
console.log(p.getName());`,o=`function createPerson(name) {
  let _name = name;
  return {
    getName: () => _name,
    setName: (n) => { _name = n; }
  };
}
const p = createPerson('Alice');
console.log(p.getName());
p.setName('Bob');
console.log(p.getName());`,s=[{input:[],expected:`Alice
Bob`}],a=["_name is private","Access through methods"],c={id:e,title:n,starterCode:t,solution:o,tests:s,hints:a};export{c as default,a as hints,e as id,o as solution,t as starterCode,s as tests,n as title};
