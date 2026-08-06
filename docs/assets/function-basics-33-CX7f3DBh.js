const n="06-functions-function-basics-33",t="Debounce Function",e=`function debounce(fn, delay) {
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
log('c');`,c=[{input:[],expected:"c"}],s=["Reset timer each call","Only last call executes"],l={id:n,title:t,starterCode:e,solution:o,tests:c,hints:s};export{l as default,s as hints,n as id,o as solution,e as starterCode,c as tests,t as title};
