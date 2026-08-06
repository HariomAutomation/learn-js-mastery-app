const t="13-oop-oop-patterns-32",n="Module Pattern",e=`const counter = (function() {
  let count = 0;
  return { increment: () => ++count, getCount: () => count };
})();
counter.increment();
console.log(counter.getCount());`,o=`const counter = (function() {
  let count = 0;
  return { increment: () => ++count, getCount: () => count };
})();
counter.increment();
console.log(counter.getCount());`,c=[{input:[],expected:"1"}],u=["IIFE creates private scope","Return public interface"],r={id:t,title:n,starterCode:e,solution:o,tests:c,hints:u};export{r as default,u as hints,t as id,o as solution,e as starterCode,c as tests,n as title};
