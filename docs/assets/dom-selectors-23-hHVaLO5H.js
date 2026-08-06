const t="10-dom-dom-selectors-23",e="Complex Selector",o=`const el = document.querySelector('div > p:first-child');
console.log(el);`,s=`const el = document.querySelector('div > p:first-child');
console.log(el);`,l=[{input:[],expected:"null"}],c=["> selects direct children","first-child selects first element"],n={id:t,title:e,starterCode:o,solution:s,tests:l,hints:c};export{n as default,c as hints,t as id,s as solution,o as starterCode,l as tests,e as title};
