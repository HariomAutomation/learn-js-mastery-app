const e="08-objects-destructuring-copying-28",n="Default Function",t=`function createUser({name = 'Anonymous', age = 0} = {}) {
  return {name, age};
}
console.log(createUser());
console.log(createUser({name: 'Alice'}));`,o=`function createUser({name = 'Anonymous', age = 0} = {}) {
  return {name, age};
}
console.log(createUser());
console.log(createUser({name: 'Alice'}));`,s=[{input:[],expected:`{ name: 'Anonymous', age: 0 }
{ name: 'Alice', age: 0 }`}],a=["Default param and object","Handle no args"],c={id:e,title:n,starterCode:t,solution:o,tests:s,hints:a};export{c as default,a as hints,e as id,o as solution,t as starterCode,s as tests,n as title};
