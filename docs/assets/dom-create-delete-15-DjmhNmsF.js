const e="10-dom-dom-create-delete-15",t="innerHTML Create",n=`const el = document.createElement('div');
el.innerHTML = '<span>Hi</span>';
console.log(el.children.length);`,s=`const el = document.createElement('div');
el.innerHTML = '<span>Hi</span>';
console.log(el.children.length);`,o=[{input:[],expected:"1"}],l=["innerHTML creates DOM elements","Parse HTML into elements"],c={id:e,title:t,starterCode:n,solution:s,tests:o,hints:l};export{c as default,l as hints,e as id,s as solution,n as starterCode,o as tests,t as title};
