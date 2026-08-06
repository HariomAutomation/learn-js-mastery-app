const t="13-oop-oop-patterns-38",n="Decorator Pattern",e=`function withTimestamp(fn) {
  return function(...args) {
    console.log('called at ' + Date.now());
    return fn(...args);
  };
}
const greet = withTimestamp(() => 'hello');
greet();`,o=`function withTimestamp(fn) {
  return function(...args) {
    console.log('called at ' + Date.now());
    return fn(...args);
  };
}
const greet = withTimestamp(() => 'hello');
greet();`,s=[{input:[],expected:"called at"}],r=["Decorator wraps function","Add behavior before/after"],a={id:t,title:n,starterCode:e,solution:o,tests:s,hints:r};export{a as default,r as hints,t as id,o as solution,e as starterCode,s as tests,n as title};
