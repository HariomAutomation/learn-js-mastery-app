const n="06-functions-closures-iife-06",t="Module Pattern",e=`const counter = (function() {
  let count = 0;
  return {
    increment: () => ++count,
    getCount: () => count
  };
})();
counter.increment();
counter.increment();
console.log(counter.getCount());`,o=`const counter = (function() {
  let count = 0;
  return {
    increment: () => ++count,
    getCount: () => count
  };
})();
counter.increment();
counter.increment();
console.log(counter.getCount());`,c=[{input:[],expected:"2"}],u=["IIFE creates module","Private state"],s={id:n,title:t,starterCode:e,solution:o,tests:c,hints:u};export{s as default,u as hints,n as id,o as solution,e as starterCode,c as tests,t as title};
