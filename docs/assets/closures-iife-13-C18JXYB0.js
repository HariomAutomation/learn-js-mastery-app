const t="06-functions-closures-iife-13",n="Module Export",o=`const math = (function() {
  const PI = 3.14159;
  const add = (a, b) => a + b;
  return { PI, add };
})();
console.log(math.PI);
console.log(math.add(2, 3));`,s=`const math = (function() {
  const PI = 3.14159;
  const add = (a, b) => a + b;
  return { PI, add };
})();
console.log(math.PI);
console.log(math.add(2, 3));`,e=[{input:[],expected:`3.14159
5`}],c=["Return public API","Private variables inside"],a={id:t,title:n,starterCode:o,solution:s,tests:e,hints:c};export{a as default,c as hints,t as id,s as solution,o as starterCode,e as tests,n as title};
