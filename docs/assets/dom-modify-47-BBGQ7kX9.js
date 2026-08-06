const t="10-dom-dom-modify-47",e="dataset Read All",s=`const el = document.querySelector('[data-name="test"]');
console.log(JSON.stringify(el.dataset));`,o=`const el = document.querySelector('[data-name="test"]');
console.log(JSON.stringify(el.dataset));`,n=[{input:[],expected:'{"name":"test"}'}],a=["dataset contains all data-* attributes","JSON.stringify to see all"],d={id:t,title:e,starterCode:s,solution:o,tests:n,hints:a};export{d as default,a as hints,t as id,o as solution,s as starterCode,n as tests,e as title};
