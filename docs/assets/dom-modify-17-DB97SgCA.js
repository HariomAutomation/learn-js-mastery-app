const t="10-dom-dom-modify-17",e="cssText Append",o=`const el = document.querySelector('.box');
el.style.cssText += '; margin: 10px';
console.log(el.style.margin);`,s=`const el = document.querySelector('.box');
el.style.cssText += '; margin: 10px';
console.log(el.style.margin);`,n=[{input:[],expected:"10px"}],l=["Use += to append to cssText","Separate properties with semicolons"],c={id:t,title:e,starterCode:o,solution:s,tests:n,hints:l};export{c as default,l as hints,t as id,s as solution,o as starterCode,n as tests,e as title};
