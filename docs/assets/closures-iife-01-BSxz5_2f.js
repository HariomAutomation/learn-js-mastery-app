const n="06-functions-closures-iife-01",t="Closure Basics",o=`function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}
const fn = outer();
fn();
fn();`,e=`function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}
const fn = outer();
fn();
fn();`,s=[{input:[],expected:`1
2`}],c=["Inner function remembers outer","Count persists between calls"],u={id:n,title:t,starterCode:o,solution:e,tests:s,hints:c};export{u as default,c as hints,n as id,e as solution,o as starterCode,s as tests,t as title};
