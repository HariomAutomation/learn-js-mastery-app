const t="10-dom-dom-create-delete-07",e="after Method",n=`const container = document.createElement('div');
const first = document.createElement('p');
container.appendChild(first);
first.after('After');
console.log(container.childNodes.length);`,o=`const container = document.createElement('div');
const first = document.createElement('p');
container.appendChild(first);
first.after('After');
console.log(container.childNodes.length);`,s=[{input:[],expected:"2"}],c=["after inserts after the element","Adds as a sibling"],r={id:t,title:e,starterCode:n,solution:o,tests:s,hints:c};export{r as default,c as hints,t as id,o as solution,n as starterCode,s as tests,e as title};
