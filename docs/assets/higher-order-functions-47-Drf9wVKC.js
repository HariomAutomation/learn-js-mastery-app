const n="06-functions-higher-order-functions-47",t="Flip Arguments",r=`function flip(fn) {
  return function(...args) {
    return fn(...args.reverse());
  };
}
const subtract = flip((a, b) => a - b);
console.log(subtract(5, 3));`,s=`function flip(fn) {
  return function(...args) {
    return fn(...args.reverse());
  };
}
const subtract = flip((a, b) => a - b);
console.log(subtract(5, 3));`,e=[{input:[],expected:"-2"}],o=["Reverse argument order","Then call original"],i={id:n,title:t,starterCode:r,solution:s,tests:e,hints:o};export{i as default,o as hints,n as id,s as solution,r as starterCode,e as tests,t as title};
