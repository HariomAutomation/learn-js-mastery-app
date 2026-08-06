const s="10-dom-dom-modify-05",t="classList add",o=`const el = document.querySelector('.box');
el.classList.add('highlight');
console.log(el.classList.contains('highlight'));`,e=`const el = document.querySelector('.box');
el.classList.add('highlight');
console.log(el.classList.contains('highlight'));`,i=[{input:[],expected:"true"}],c=["classList.add adds a class","classList.contains checks membership"],l={id:s,title:t,starterCode:o,solution:e,tests:i,hints:c};export{l as default,c as hints,s as id,e as solution,o as starterCode,i as tests,t as title};
