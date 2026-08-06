const e="10-dom-dom-create-delete-50",t="DocumentFragment Append",n=`const frag = document.createDocumentFragment();
const div = document.createElement('div');
frag.appendChild(div);
console.log(frag.children.length);`,o=`const frag = document.createDocumentFragment();
const div = document.createElement('div');
frag.appendChild(div);
console.log(frag.children.length);`,d=[{input:[],expected:"1"}],c=["Fragment holds children temporarily","Count children before append"],r={id:e,title:t,starterCode:n,solution:o,tests:d,hints:c};export{r as default,c as hints,e as id,o as solution,n as starterCode,d as tests,t as title};
