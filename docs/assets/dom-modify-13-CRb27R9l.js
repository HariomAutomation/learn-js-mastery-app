const t="10-dom-dom-modify-13",e="setAttribute Boolean",o=`const el = document.querySelector('input');
el.setAttribute('disabled', '');
console.log(el.disabled);`,s=`const el = document.querySelector('input');
el.setAttribute('disabled', '');
console.log(el.disabled);`,n=[{input:[],expected:"true"}],l=["Empty string enables boolean attribute","Check the property directly"],i={id:t,title:e,starterCode:o,solution:s,tests:n,hints:l};export{i as default,l as hints,t as id,s as solution,o as starterCode,n as tests,e as title};
