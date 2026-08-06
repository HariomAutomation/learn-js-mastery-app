const n="06-functions-higher-order-functions-42",t="Chain Functions",s=`function chain(...fns) {
  return (initial) => {
    let result = initial;
    for (const fn of fns) {
      result = fn(result);
    }
    return result;
  };
}
const process = chain(
  x => x + 1,
  x => x * 2,
  x => x - 3
);
console.log(process(5));`,e=`function chain(...fns) {
  return (initial) => {
    let result = initial;
    for (const fn of fns) {
      result = fn(result);
    }
    return result;
  };
}
const process = chain(
  x => x + 1,
  x => x * 2,
  x => x - 3
);
console.log(process(5));`,o=[{input:[],expected:"9"}],i=["Sequential execution","Pass result to next"],r={id:n,title:t,starterCode:s,solution:e,tests:o,hints:i};export{r as default,i as hints,n as id,e as solution,s as starterCode,o as tests,t as title};
