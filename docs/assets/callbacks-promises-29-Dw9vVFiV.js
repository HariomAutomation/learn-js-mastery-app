const s="12-async-callbacks-promises-29",e="Async Pattern",t=`function asyncAdd(a, b) {
  return new Promise(resolve => resolve(a + b));
}
asyncAdd(2, 3).then(result => console.log(result));`,n=`function asyncAdd(a, b) {
  return new Promise(resolve => resolve(a + b));
}
asyncAdd(2, 3).then(result => console.log(result));`,o=[{input:[],expected:"5"}],r=["Wrap sync code in Promise","Use then to get result"],c={id:s,title:e,starterCode:t,solution:n,tests:o,hints:r};export{c as default,r as hints,s as id,n as solution,t as starterCode,o as tests,e as title};
