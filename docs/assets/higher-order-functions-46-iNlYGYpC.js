const t="06-functions-higher-order-functions-46",n="Partial Application",r=`function partial(fn, ...presetArgs) {
  return function(...laterArgs) {
    return fn(...presetArgs, ...laterArgs);
  };
}
const add5 = partial((a, b) => a + b, 5);
console.log(add5(3));`,s=`function partial(fn, ...presetArgs) {
  return function(...laterArgs) {
    return fn(...presetArgs, ...laterArgs);
  };
}
const add5 = partial((a, b) => a + b, 5);
console.log(add5(3));`,e=[{input:[],expected:"8"}],o=["Fix some args","Add more later"],a={id:t,title:n,starterCode:r,solution:s,tests:e,hints:o};export{a as default,o as hints,t as id,s as solution,r as starterCode,e as tests,n as title};
