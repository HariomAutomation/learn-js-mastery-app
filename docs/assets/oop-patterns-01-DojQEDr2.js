const t="13-oop-oop-patterns-01",n="Module Pattern IIFE",e=`const counter = (function() {
  let count = 0;
  return {
    increment() { count++; },
    getCount() { return count; }
  };
})();
counter.increment();
console.log(counter.getCount());`,o=`const counter = (function() {
  let count = 0;
  return {
    increment() { count++; },
    getCount() { return count; }
  };
})();
counter.increment();
console.log(counter.getCount());`,c=[{input:[],expected:"1"}],r=["IIFE creates private scope","Return public methods"],u={id:t,title:n,starterCode:e,solution:o,tests:c,hints:r};export{u as default,r as hints,t as id,o as solution,e as starterCode,c as tests,n as title};
