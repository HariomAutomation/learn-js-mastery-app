const t="07-arrays-array-methods-44",o="Map Iteration",s=`const arr = [1, 2, 3];
arr.____(x => console.log(x));`,r=`const arr = [1, 2, 3];
arr.forEach(x => console.log(x));`,e=[{input:[],expected:`1
2
3`}],n=["forEach for side effects","No return value"],a={id:t,title:o,starterCode:s,solution:r,tests:e,hints:n};export{a as default,n as hints,t as id,r as solution,s as starterCode,e as tests,o as title};
