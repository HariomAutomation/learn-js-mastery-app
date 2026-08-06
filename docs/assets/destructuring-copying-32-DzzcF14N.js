const t="08-objects-destructuring-copying-32",n="Destructuring Return",o=`function getCoords() {
  return {x: 10, y: 20};
}
const {x, y} = getCoords();
console.log(x, y);`,s=`function getCoords() {
  return {x: 10, y: 20};
}
const {x, y} = getCoords();
console.log(x, y);`,e=[{input:[],expected:"10 20"}],r=["Destructure return value","Extract x and y"],c={id:t,title:n,starterCode:o,solution:s,tests:e,hints:r};export{c as default,r as hints,t as id,s as solution,o as starterCode,e as tests,n as title};
