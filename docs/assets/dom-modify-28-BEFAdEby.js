const e="10-dom-dom-modify-28",o="style removeProperty",t=`const el = document.querySelector('.box');
el.style.color = 'red';
el.style.removeProperty('color');
console.log(el.style.color);`,l=`const el = document.querySelector('.box');
el.style.color = 'red';
el.style.removeProperty('color');
console.log(el.style.color);`,r=[{input:[],expected:""}],s=["removeProperty removes an inline style","Returns empty string after removal"],n={id:e,title:o,starterCode:t,solution:l,tests:r,hints:s};export{n as default,s as hints,e as id,l as solution,t as starterCode,r as tests,o as title};
