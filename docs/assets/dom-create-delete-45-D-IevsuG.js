const e="10-dom-dom-create-delete-45",t="textContent vs createTextNode",n=`const el = document.createElement('p');
el.textContent = 'Hello';
console.log(el.childNodes.length);`,o=`const el = document.createElement('p');
el.textContent = 'Hello';
console.log(el.childNodes.length);`,l=[{input:[],expected:"1"}],s=["textContent creates a text node internally","One child node created"],c={id:e,title:t,starterCode:n,solution:o,tests:l,hints:s};export{c as default,s as hints,e as id,o as solution,n as starterCode,l as tests,t as title};
