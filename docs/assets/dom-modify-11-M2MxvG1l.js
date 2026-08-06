const s="10-dom-dom-modify-11",e="className Replace",o=`const el = document.querySelector('.box');
el.className = 'new-class';
console.log(el.className);`,t=`const el = document.querySelector('.box');
el.className = 'new-class';
console.log(el.className);`,l=[{input:[],expected:"new-class"}],c=["className replaces all classes","Use classList for individual changes"],n={id:s,title:e,starterCode:o,solution:t,tests:l,hints:c};export{n as default,c as hints,s as id,t as solution,o as starterCode,l as tests,e as title};
