const t="10-dom-dom-selectors-19",o="forEach on NodeList",e=`const items = document.querySelectorAll('.item');
let count = 0;
items.forEach(() => count++);
console.log(count);`,n=`const items = document.querySelectorAll('.item');
let count = 0;
items.forEach(() => count++);
console.log(count);`,s=[{input:[],expected:"0"}],c=["NodeList supports forEach","Count iterations in the callback"],l={id:t,title:o,starterCode:e,solution:n,tests:s,hints:c};export{l as default,c as hints,t as id,n as solution,e as starterCode,s as tests,o as title};
