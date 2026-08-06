const e="10-dom-dom-modify-27",t="dataset Delete",d=`const el = document.querySelector('.item');
el.dataset.id = '100';
delete el.dataset.id;
console.log(el.dataset.id);`,o=`const el = document.querySelector('.item');
el.dataset.id = '100';
delete el.dataset.id;
console.log(el.dataset.id);`,s=[{input:[],expected:"undefined"}],n=["delete removes dataset property","Returns undefined when deleted"],l={id:e,title:t,starterCode:d,solution:o,tests:s,hints:n};export{l as default,n as hints,e as id,o as solution,d as starterCode,s as tests,t as title};
