const t="11-events-event-practice-30",n="Throttle Implementation",e=`function throttle(fn, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}
const log = throttle((x) => console.log(x), 100);
log('test');`,o=`function throttle(fn, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}
const log = throttle((x) => console.log(x), 100);
log('test');`,i=[{input:[],expected:"test"}],l=["Use flag to limit execution","Only run once per limit period"],s={id:t,title:n,starterCode:e,solution:o,tests:i,hints:l};export{s as default,l as hints,t as id,o as solution,e as starterCode,i as tests,n as title};
