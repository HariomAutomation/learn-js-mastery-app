const e="12-async-callbacks-promises-21",t="Executor Function",s=`const p = new Promise((resolve, reject) => {
  resolve('executor result');
});
p.then(r => console.log(r));`,o=`const p = new Promise((resolve, reject) => {
  resolve('executor result');
});
p.then(r => console.log(r));`,r=[{input:[],expected:"executor result"}],n=["Executor runs immediately","Calls resolve or reject"],c={id:e,title:t,starterCode:s,solution:o,tests:r,hints:n};export{c as default,n as hints,e as id,o as solution,s as starterCode,r as tests,t as title};
