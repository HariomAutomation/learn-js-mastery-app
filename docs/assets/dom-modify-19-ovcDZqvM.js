const t="10-dom-dom-modify-19",e="dataset Set",s=`const el = document.querySelector('.item');
el.dataset.userId = '42';
console.log(el.getAttribute('data-user-id'));`,o=`const el = document.querySelector('.item');
el.dataset.userId = '42';
console.log(el.getAttribute('data-user-id'));`,d=[{input:[],expected:"42"}],a=["dataset camelCase maps to data-kebab-case","userId becomes data-user-id"],n={id:t,title:e,starterCode:s,solution:o,tests:d,hints:a};export{n as default,a as hints,t as id,o as solution,s as starterCode,d as tests,e as title};
