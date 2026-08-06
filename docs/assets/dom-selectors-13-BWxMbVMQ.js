const t="10-dom-dom-selectors-13",e="firstElementChild",s=`const el = document.querySelector('.parent');
console.log(el.firstElementChild);`,o=`const el = document.querySelector('.parent');
console.log(el.firstElementChild);`,n=[{input:[],expected:"null"}],l=["Returns first child that is an element","Skips text nodes"],c={id:t,title:e,starterCode:s,solution:o,tests:n,hints:l};export{c as default,l as hints,t as id,o as solution,s as starterCode,n as tests,e as title};
