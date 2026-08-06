const e="10-dom-dom-create-delete-18",t="insertAdjacentText",n=`const el = document.createElement('div');
el.insertAdjacentText('beforeend', 'Hello');
console.log(el.textContent);`,o=`const el = document.createElement('div');
el.insertAdjacentText('beforeend', 'Hello');
console.log(el.textContent);`,s=[{input:[],expected:"Hello"}],l=["insertAdjacentText inserts text node","beforeend puts inside at end"],d={id:e,title:t,starterCode:n,solution:o,tests:s,hints:l};export{d as default,l as hints,e as id,o as solution,n as starterCode,s as tests,t as title};
