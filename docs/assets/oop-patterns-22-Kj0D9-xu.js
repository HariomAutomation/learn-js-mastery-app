const t="13-oop-oop-patterns-22",e="Flyweight",n=`const flyweights = {};
function getFlyweight(key) {
  if (!flyweights[key]) flyweights[key] = { key };
  return flyweights[key];
}
const a = getFlyweight('a');
const b = getFlyweight('a');
console.log(a === b);`,s=`const flyweights = {};
function getFlyweight(key) {
  if (!flyweights[key]) flyweights[key] = { key };
  return flyweights[key];
}
const a = getFlyweight('a');
const b = getFlyweight('a');
console.log(a === b);`,o=[{input:[],expected:"true"}],i=["Share common state","Cache objects by key"],y={id:t,title:e,starterCode:n,solution:s,tests:o,hints:i};export{y as default,i as hints,t as id,s as solution,n as starterCode,o as tests,e as title};
