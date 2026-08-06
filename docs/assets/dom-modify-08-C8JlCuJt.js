const t="10-dom-dom-modify-08",e="cssText Property",s=`const el = document.querySelector('.box');
el.style.cssText = 'color: blue; font-size: 16px';
console.log(el.style.cssText);`,o=`const el = document.querySelector('.box');
el.style.cssText = 'color: blue; font-size: 16px';
console.log(el.style.cssText);`,l=[{input:[],expected:"color: blue; font-size: 16px"}],n=["cssText sets multiple styles at once","Use CSS syntax in string"],c={id:t,title:e,starterCode:s,solution:o,tests:l,hints:n};export{c as default,n as hints,t as id,o as solution,s as starterCode,l as tests,e as title};
