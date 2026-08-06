const e="10-dom-dom-create-delete-16",t="insertAdjacentHTML",n=`const el = document.createElement('div');
el.insertAdjacentHTML('beforeend', '<p>Para</p>');
console.log(el.innerHTML);`,o=`const el = document.createElement('div');
el.insertAdjacentHTML('beforeend', '<p>Para</p>');
console.log(el.innerHTML);`,s=[{input:[],expected:"<p>Para</p>"}],d=["insertAdjacentHTML inserts at position","beforeend puts inside at end"],i={id:e,title:t,starterCode:n,solution:o,tests:s,hints:d};export{i as default,d as hints,e as id,o as solution,n as starterCode,s as tests,t as title};
