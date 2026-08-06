const e="12-async-callbacks-promises-11",n="Error Handling",t=`function riskyOperation() {
  return new Promise((resolve, reject) => {
    reject('something went wrong');
  });
}
riskyOperation()
  .catch(err => console.log(err));`,r=`function riskyOperation() {
  return new Promise((resolve, reject) => {
    reject('something went wrong');
  });
}
riskyOperation()
  .catch(err => console.log(err));`,o=[{input:[],expected:"something went wrong"}],s=["reject sends error to catch","Use catch to handle errors"],c={id:e,title:n,starterCode:t,solution:r,tests:o,hints:s};export{c as default,s as hints,e as id,r as solution,t as starterCode,o as tests,n as title};
