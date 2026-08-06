const o="06-functions-arrow-functions-11",n="Arrow Constructor Error",t=`try {
  const Foo = () => {};
  new Foo();
} catch (e) {
  console.log('Error: Cannot use new with arrow');
}`,r=`try {
  const Foo = () => {};
  new Foo();
} catch (e) {
  console.log('Error: Cannot use new with arrow');
}`,s=[{input:[],expected:"Error: Cannot use new with arrow"}],e=["Arrow functions can't be constructors","new throws error"],c={id:o,title:n,starterCode:t,solution:r,tests:s,hints:e};export{c as default,e as hints,o as id,r as solution,t as starterCode,s as tests,n as title};
