const e="10-dom-dom-create-delete-38",t="prepend to Empty",n=`const el = document.createElement('div');
el.prepend('First');
console.log(el.textContent);`,o=`const el = document.createElement('div');
el.prepend('First');
console.log(el.textContent);`,s=[{input:[],expected:"First"}],d=["prepend works on empty elements","Adds as first child"],l={id:e,title:t,starterCode:n,solution:o,tests:s,hints:d};export{l as default,d as hints,e as id,o as solution,n as starterCode,s as tests,t as title};
