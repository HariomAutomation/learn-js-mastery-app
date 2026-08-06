const t="10-dom-dom-selectors-26",e="dataset Property",o=`const el = document.querySelector('[data-name]');
console.log(typeof el.dataset);`,s=`const el = document.querySelector('[data-name]');
console.log(typeof el.dataset);`,n=[{input:[],expected:"object"}],a=["dataset returns a DOMStringMap","It's an object mapping data attributes"],c={id:t,title:e,starterCode:o,solution:s,tests:n,hints:a};export{c as default,a as hints,t as id,s as solution,o as starterCode,n as tests,e as title};
