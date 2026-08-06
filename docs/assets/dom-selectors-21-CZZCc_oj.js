const e="10-dom-dom-selectors-21",t="Closest Polyfill Concept",n=`function closestPolyfill(el, selector) {
  // TODO: implement traversal up
  return null;
}
console.log(typeof closestPolyfill);`,l=`function closestPolyfill(el, selector) {
  let current = el;
  while (current) {
    if (current.matches(selector)) return current;
    current = current.parentElement;
  }
  return null;
}
console.log(typeof closestPolyfill);`,o=[{input:[],expected:"function"}],s=["Traverse up using parentElement","Check matches at each step"],r={id:e,title:t,starterCode:n,solution:l,tests:o,hints:s};export{r as default,s as hints,e as id,l as solution,n as starterCode,o as tests,t as title};
