const t="06-functions-closures-iife-43",n="Throttle Function",l=`function throttle(fn, limit) {
  let lastCall = 0;
  return function(...args) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      fn(...args);
    }
  };
}`,o=`function throttle(fn, limit) {
  let lastCall = 0;
  return function(...args) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      fn(...args);
    }
  };
}`,s=[{input:[],expected:""}],e=["Limit execution rate","Check time between calls"],i={id:t,title:n,starterCode:l,solution:o,tests:s,hints:e};export{i as default,e as hints,t as id,o as solution,l as starterCode,s as tests,n as title};
