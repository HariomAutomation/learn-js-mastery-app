const e="10-dom-dom-selectors-15",o="childNodes Type",t=`const el = document.querySelector('div');
const nodes = el.childNodes;
console.log(nodes.length);`,s=`const el = document.querySelector('div');
const nodes = el.childNodes;
console.log(nodes.length);`,n=[{input:[],expected:"0"}],d=["childNodes includes all node types","Includes text and comment nodes"],c={id:e,title:o,starterCode:t,solution:s,tests:n,hints:d};export{c as default,d as hints,e as id,s as solution,t as starterCode,n as tests,o as title};
