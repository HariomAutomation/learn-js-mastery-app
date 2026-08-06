const t="06-functions-closures-iife-12",s="IIFE With Arguments",n=`const result = (function(a, b) {
  return a + b;
})(3, 7);
console.log(result);`,e=`const result = (function(a, b) {
  return a + b;
})(3, 7);
console.log(result);`,o=[{input:[],expected:"10"}],r=["Pass args after function","Return value"],u={id:t,title:s,starterCode:n,solution:e,tests:o,hints:r};export{u as default,r as hints,t as id,e as solution,n as starterCode,o as tests,s as title};
