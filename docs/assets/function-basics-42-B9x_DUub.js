const n="06-functions-function-basics-42",t="Tap Function",e=`function tap(fn) {
  return (value) => {
    fn(value);
    return value;
  };
}
const log = tap(x => console.log('Logged:', x));
const result = log(42);
console.log('Result:', result);`,o=`function tap(fn) {
  return (value) => {
    fn(value);
    return value;
  };
}
const log = tap(x => console.log('Logged:', x));
const result = log(42);
console.log('Result:', result);`,s=[{input:[],expected:`Logged: 42
Result: 42`}],l=["Side effect then return","Useful for debugging"],u={id:n,title:t,starterCode:e,solution:o,tests:s,hints:l};export{u as default,l as hints,n as id,o as solution,e as starterCode,s as tests,t as title};
