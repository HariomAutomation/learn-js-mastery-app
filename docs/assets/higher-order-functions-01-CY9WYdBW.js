const n="06-functions-higher-order-functions-01",t="Function As Argument",e=`function doTwice(fn, value) {
  fn(value);
  fn(value);
}
doTwice(console.log, 'Hello');`,o=`function doTwice(fn, value) {
  fn(value);
  fn(value);
}
doTwice(console.log, 'Hello');`,s=[{input:[],expected:`Hello
Hello`}],l=["Pass function as parameter","Call it twice"],i={id:n,title:t,starterCode:e,solution:o,tests:s,hints:l};export{i as default,l as hints,n as id,o as solution,e as starterCode,s as tests,t as title};
