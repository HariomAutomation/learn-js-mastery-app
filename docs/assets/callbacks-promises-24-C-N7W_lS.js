const s="12-async-callbacks-promises-24",t="Race Winner",e=`const slow = new Promise(r => setTimeout(() => r('slow'), 100));
const fast = new Promise(r => setTimeout(() => r('fast'), 10));
Promise.race([slow, fast]).then(w => console.log(w));`,o=`const slow = new Promise(r => setTimeout(() => r('slow'), 100));
const fast = new Promise(r => setTimeout(() => r('fast'), 10));
Promise.race([slow, fast]).then(w => console.log(w));`,n=[{input:[],expected:"fast"}],i=["First promise to settle wins","Faster timeout wins"],r={id:s,title:t,starterCode:e,solution:o,tests:n,hints:i};export{r as default,i as hints,s as id,o as solution,e as starterCode,n as tests,t as title};
