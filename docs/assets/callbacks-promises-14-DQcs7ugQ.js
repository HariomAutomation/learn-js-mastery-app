const s="12-async-callbacks-promises-14",e="Concurrent Promises",t=`const p1 = new Promise(r => setTimeout(() => r(1), 50));
const p2 = new Promise(r => setTimeout(() => r(2), 30));
const p3 = new Promise(r => setTimeout(() => r(3), 10));
Promise.all([p1, p2, p3]).then(v => console.log(v));`,o=`const p1 = new Promise(r => setTimeout(() => r(1), 50));
const p2 = new Promise(r => setTimeout(() => r(2), 30));
const p3 = new Promise(r => setTimeout(() => r(3), 10));
Promise.all([p1, p2, p3]).then(v => console.log(v));`,n=[{input:[],expected:"1,2,3"}],r=["All promises run concurrently","Results in order of input"],i={id:s,title:e,starterCode:t,solution:o,tests:n,hints:r};export{i as default,r as hints,s as id,o as solution,t as starterCode,n as tests,e as title};
