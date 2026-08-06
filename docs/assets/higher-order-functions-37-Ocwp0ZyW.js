const t="06-functions-higher-order-functions-37",n="Throttle Basics",o=`function throttle(fn, limit) {
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
}`,e=[{input:[],expected:""}],l=["Limit execution rate","Check time between calls"],i={id:t,title:n,starterCode:o,solution:s,tests:e,hints:l};export{i as default,l as hints,t as id,s as solution,o as starterCode,e as tests,n as title};
