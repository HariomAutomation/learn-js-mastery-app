const s="10-dom-dom-modify-29",e="classList replace",t=`const el = document.querySelector('.box');
el.classList.replace('old-class', 'new-class');
console.log(el.classList.contains('new-class'));`,l=`const el = document.querySelector('.box');
el.classList.replace('old-class', 'new-class');
console.log(el.classList.contains('new-class'));`,o=[{input:[],expected:"false"}],c=["classList.replace swaps classes","Returns false if old class not found"],n={id:s,title:e,starterCode:t,solution:l,tests:o,hints:c};export{n as default,c as hints,s as id,l as solution,t as starterCode,o as tests,e as title};
