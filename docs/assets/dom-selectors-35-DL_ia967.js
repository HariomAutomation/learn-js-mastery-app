const e="10-dom-dom-selectors-35",t="closest Returns Element",o=`const el = document.querySelector('.deep');
const found = el.closest('.ancestor');
console.log(found === null || found instanceof Element);`,n=`const el = document.querySelector('.deep');
const found = el.closest('.ancestor');
console.log(found === null || found instanceof Element);`,s=[{input:[],expected:"true"}],l=["closest returns Element or null","Check with instanceof"],c={id:e,title:t,starterCode:o,solution:n,tests:s,hints:l};export{c as default,l as hints,e as id,n as solution,o as starterCode,s as tests,t as title};
