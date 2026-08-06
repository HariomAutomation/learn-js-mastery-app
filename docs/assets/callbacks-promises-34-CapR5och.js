const s="12-async-callbacks-promises-34",e="Promise.race Loser",t=`const p1 = new Promise(r => setTimeout(() => r('first'), 50));
const p2 = new Promise(r => setTimeout(() => r('second'), 100));
Promise.race([p1, p2]).then(w => console.log(w));`,o=`const p1 = new Promise(r => setTimeout(() => r('first'), 50));
const p2 = new Promise(r => setTimeout(() => r('second'), 100));
Promise.race([p1, p2]).then(w => console.log(w));`,n=[{input:[],expected:"first"}],r=["First to settle wins","Slower promise is ignored"],i={id:s,title:e,starterCode:t,solution:o,tests:n,hints:r};export{i as default,r as hints,s as id,o as solution,t as starterCode,n as tests,e as title};
