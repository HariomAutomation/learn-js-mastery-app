const n="06-functions-closures-iife-46",t="Flip Arguments",s=`function flip(fn) {
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
console.log(subtract(5, 3));`,r=[{input:[],expected:"-2"}],o=["Reverse argument order","Then call original"],c={id:n,title:t,starterCode:s,solution:e,tests:r,hints:o};export{c as default,o as hints,n as id,e as solution,s as starterCode,r as tests,t as title};
