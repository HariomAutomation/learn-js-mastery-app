const t="06-functions-function-basics-36",n="Partial Application",s=`function partial(fn, ...presetArgs) {
  return function(...laterArgs) {
    return fn(...presetArgs, ...laterArgs);
  };
}
const add5 = partial((a, b) => a + b, 5);
console.log(add5(3));`,r=`function partial(fn, ...presetArgs) {
  return function(...laterArgs) {
    return fn(...presetArgs, ...laterArgs);
  };
}
const add5 = partial((a, b) => a + b, 5);
console.log(add5(3));`,e=[{input:[],expected:"8"}],o=["Fix some args","Add more later"],a={id:t,title:n,starterCode:s,solution:r,tests:e,hints:o};export{a as default,o as hints,t as id,r as solution,s as starterCode,e as tests,n as title};
