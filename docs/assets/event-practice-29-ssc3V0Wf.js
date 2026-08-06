const e="11-events-event-practice-29",t="Debounce Implementation",n=`function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
const log = debounce((x) => console.log(x), 100);
log('test');`,o=`function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
const log = debounce((x) => console.log(x), 100);
log('test');`,s=[{input:[],expected:"test"}],c=["Clear previous timer","Set new timer each call"],i={id:e,title:t,starterCode:n,solution:o,tests:s,hints:c};export{i as default,c as hints,e as id,o as solution,n as starterCode,s as tests,t as title};
