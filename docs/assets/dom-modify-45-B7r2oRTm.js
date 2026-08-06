const e="10-dom-dom-modify-45",t="style.cssText Reset",o=`const el = document.querySelector('.box');
el.style.color = 'red';
el.style.cssText = '';
console.log(el.style.color);`,s=`const el = document.querySelector('.box');
el.style.color = 'red';
el.style.cssText = '';
console.log(el.style.color);`,l=[{input:[],expected:""}],n=["Setting cssText to empty clears all","Individual properties are removed"],c={id:e,title:t,starterCode:o,solution:s,tests:l,hints:n};export{c as default,n as hints,e as id,s as solution,o as starterCode,l as tests,t as title};
