const e="10-dom-dom-create-delete-37",t="Template Element",n=`const template = document.createElement('template');
template.innerHTML = '<p>Inside template</p>';
console.log(template.content.children.length);`,l=`const template = document.createElement('template');
template.innerHTML = '<p>Inside template</p>';
console.log(template.content.children.length);`,o=[{input:[],expected:"1"}],s=["template.content is a DocumentFragment","Children are inside the fragment"],a={id:e,title:t,starterCode:n,solution:l,tests:o,hints:s};export{a as default,s as hints,e as id,l as solution,n as starterCode,o as tests,t as title};
