const n="06-functions-higher-order-functions-07",e="Debounce Basics",t=`function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
const log = debounce(console.log, 100);
log('a');
log('b');
log('c');`,o=`function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
const log = debounce(console.log, 100);
log('a');
log('b');
log('c');`,s=[{input:[],expected:"c"}],c=["Reset timer each call","Only last call executes"],l={id:n,title:e,starterCode:t,solution:o,tests:s,hints:c};export{l as default,c as hints,n as id,o as solution,t as starterCode,s as tests,e as title};
