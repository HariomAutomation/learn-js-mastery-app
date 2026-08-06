const n="06-functions-function-basics-44",t="Flip Arguments",s=`function flip(fn) {
  return function(...args) {
    return fn(...args.reverse());
  };
}
const subtract = flip((a, b) => a - b);
console.log(subtract(5, 3));`,e=`function flip(fn) {
  return function(...args) {
    return fn(...args.reverse());
  };
}
const subtract = flip((a, b) => a - b);
console.log(subtract(5, 3));`,o=[{input:[],expected:"-2"}],r=["Reverse argument order","Then call original"],c={id:n,title:t,starterCode:s,solution:e,tests:o,hints:r};export{c as default,r as hints,n as id,e as solution,s as starterCode,o as tests,t as title};
