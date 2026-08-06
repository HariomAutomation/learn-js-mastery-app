const t="06-functions-closures-iife-20",e="Private State",s=`function createState(initial) {
  let state = initial;
  return {
    get: () => state,
    set: (val) => { state = val; },
    reset: () => { state = initial; }
  };
}
const s = createState(10);
s.set(20);
console.log(s.get());
s.reset();
console.log(s.get());`,n=`function createState(initial) {
  let state = initial;
  return {
    get: () => state,
    set: (val) => { state = val; },
    reset: () => { state = initial; }
  };
}
const s = createState(10);
s.set(20);
console.log(s.get());
s.reset();
console.log(s.get());`,i=[{input:[],expected:`20
10`}],a=["initial is captured","reset uses captured value"],o={id:t,title:e,starterCode:s,solution:n,tests:i,hints:a};export{o as default,a as hints,t as id,n as solution,s as starterCode,i as tests,e as title};
