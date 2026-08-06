const t="10-dom-dom-modify-35",e="dataset Keys",o=`const el = document.querySelector('[data-id]');
console.log(Object.keys(el.dataset).length);`,s=`const el = document.querySelector('[data-id]');
console.log(Object.keys(el.dataset).length);`,n=[{input:[],expected:"1"}],d=["dataset is an object","Object.keys returns property names"],c={id:t,title:e,starterCode:o,solution:s,tests:n,hints:d};export{c as default,d as hints,t as id,s as solution,o as starterCode,n as tests,e as title};
