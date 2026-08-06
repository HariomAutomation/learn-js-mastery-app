const n="06-functions-function-basics-49",t="Chain Functions",s=`function chain(...fns) {
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
console.log(process(5));`,o=`function chain(...fns) {
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
console.log(process(5));`,e=[{input:[],expected:"9"}],i=["Sequential execution","Pass result to next"],c={id:n,title:t,starterCode:s,solution:o,tests:e,hints:i};export{c as default,i as hints,n as id,o as solution,s as starterCode,e as tests,t as title};
