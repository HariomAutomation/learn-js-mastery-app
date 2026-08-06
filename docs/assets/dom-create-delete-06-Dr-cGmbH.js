const e="10-dom-dom-create-delete-06",t="prepend Method",n=`const el = document.createElement('div');
el.append(document.createElement('span'));
el.prepend('First');
console.log(el.firstChild.textContent);`,s=`const el = document.createElement('div');
el.append(document.createElement('span'));
el.prepend('First');
console.log(el.firstChild.textContent);`,o=[{input:[],expected:"First"}],d=["prepend adds items at beginning","firstChild gets the first node"],l={id:e,title:t,starterCode:n,solution:s,tests:o,hints:d};export{l as default,d as hints,e as id,s as solution,n as starterCode,o as tests,t as title};
