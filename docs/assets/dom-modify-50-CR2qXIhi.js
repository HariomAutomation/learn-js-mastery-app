const e="10-dom-dom-modify-50",t="setAttribute Checked",o=`const el = document.querySelector('input[type="checkbox"]');
el.setAttribute('checked', '');
console.log(el.checked);`,c=`const el = document.querySelector('input[type="checkbox"]');
el.setAttribute('checked', '');
console.log(el.checked);`,s=[{input:[],expected:"true"}],n=["setAttribute for checked state","checked is a boolean property"],d={id:e,title:t,starterCode:o,solution:c,tests:s,hints:n};export{d as default,n as hints,e as id,c as solution,o as starterCode,s as tests,t as title};
