const e="12-async-callbacks-promises-03",s="Promise Creation",o=`const promise = new Promise((resolve, reject) => {
  // TODO: resolve the promise
  resolve('done');
});
promise.then(result => console.log(result));`,t=`const promise = new Promise((resolve, reject) => {
  resolve('done');
});
promise.then(result => console.log(result));`,n=[{input:[],expected:"done"}],r=["Promise constructor takes executor","resolve() fulfills the promise"],l={id:e,title:s,starterCode:o,solution:t,tests:n,hints:r};export{l as default,r as hints,e as id,t as solution,o as starterCode,n as tests,s as title};
