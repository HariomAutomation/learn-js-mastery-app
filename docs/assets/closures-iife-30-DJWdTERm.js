const n="06-functions-closures-iife-30",t="Closure In Callback",e=`function setup() {
  let count = 0;
  return {
    increment: () => ++count,
    getCount: () => count
  };
}
const counter = setup();
const fn = () => console.log(counter.increment());
fn();
fn();
fn();`,o=`function setup() {
  let count = 0;
  return {
    increment: () => ++count,
    getCount: () => count
  };
}
const counter = setup();
const fn = () => console.log(counter.increment());
fn();
fn();
fn();`,s=[{input:[],expected:`1
2
3`}],c=["Closure persists","Callback uses it"],u={id:n,title:t,starterCode:e,solution:o,tests:s,hints:c};export{u as default,c as hints,n as id,o as solution,e as starterCode,s as tests,t as title};
