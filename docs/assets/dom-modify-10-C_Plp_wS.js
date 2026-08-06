const t="10-dom-dom-modify-10",e="dataset Property",o=`const el = document.querySelector('[data-id]');
el.dataset.id = '123';
console.log(el.dataset.id);`,s=`const el = document.querySelector('[data-id]');
el.dataset.id = '123';
console.log(el.dataset.id);`,d=[{input:[],expected:"123"}],a=["dataset maps data-* attributes","Use camelCase for multi-word attrs"],n={id:t,title:e,starterCode:o,solution:s,tests:d,hints:a};export{n as default,a as hints,t as id,s as solution,o as starterCode,d as tests,e as title};
