const e="10-dom-dom-modify-04",t="removeAttribute Method",o=`const el = document.querySelector('[disabled]');
el.removeAttribute('disabled');
console.log(el.hasAttribute('disabled'));`,s=`const el = document.querySelector('[disabled]');
el.removeAttribute('disabled');
console.log(el.hasAttribute('disabled'));`,d=[{input:[],expected:"false"}],i=["removeAttribute removes an attribute","hasAttribute checks existence"],l={id:e,title:t,starterCode:o,solution:s,tests:d,hints:i};export{l as default,i as hints,e as id,s as solution,o as starterCode,d as tests,t as title};
