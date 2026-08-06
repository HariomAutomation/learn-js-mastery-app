const t="06-functions-function-basics-41",n="Throttle Function",o=`function throttle(fn, limit) {
  let lastCall = 0;
  return function(...args) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      fn(...args);
    }
  };
}`,s=`function throttle(fn, limit) {
  let lastCall = 0;
  return function(...args) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      fn(...args);
    }
  };
}`,l=[{input:[],expected:""}],i=["Limit execution rate","Check time between calls"],e={id:t,title:n,starterCode:o,solution:s,tests:l,hints:i};export{e as default,i as hints,t as id,s as solution,o as starterCode,l as tests,n as title};
