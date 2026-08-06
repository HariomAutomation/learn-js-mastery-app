const e="10-dom-dom-create-delete-35",t="innerHTML Clear",n=`const el = document.createElement('div');
el.innerHTML = '<p>Content</p>';
el.innerHTML = '';
console.log(el.children.length);`,o=`const el = document.createElement('div');
el.innerHTML = '<p>Content</p>';
el.innerHTML = '';
console.log(el.children.length);`,l=[{input:[],expected:"0"}],s=["Setting innerHTML to '' clears children","Simple way to empty element"],i={id:e,title:t,starterCode:n,solution:o,tests:l,hints:s};export{i as default,s as hints,e as id,o as solution,n as starterCode,l as tests,t as title};
