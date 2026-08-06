const t="10-dom-dom-selectors-07",e="closest Traversal",s=`const el = document.querySelector('.child');
const ancestor = el.closest(???);
console.log(ancestor);`,o=`const el = document.querySelector('.child');
const ancestor = el.closest('.parent');
console.log(ancestor);`,c=[{input:[],expected:"null"}],n=["closest travels UP the DOM tree","Takes a CSS selector string"],l={id:t,title:e,starterCode:s,solution:o,tests:c,hints:n};export{l as default,n as hints,t as id,o as solution,s as starterCode,c as tests,e as title};
