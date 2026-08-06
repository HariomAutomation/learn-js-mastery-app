const e="10-dom-dom-create-delete-39",t="append to Empty",n=`const el = document.createElement('div');
el.append('First');
console.log(el.textContent);`,o=`const el = document.createElement('div');
el.append('First');
console.log(el.textContent);`,s=[{input:[],expected:"First"}],d=["append adds to end","Same as prepend on empty element"],l={id:e,title:t,starterCode:n,solution:o,tests:s,hints:d};export{l as default,d as hints,e as id,o as solution,n as starterCode,s as tests,t as title};
