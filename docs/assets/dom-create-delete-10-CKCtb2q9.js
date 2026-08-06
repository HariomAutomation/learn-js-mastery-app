const e="10-dom-dom-create-delete-10",t="removeChild",n=`const parent = document.createElement('div');
const child = document.createElement('p');
parent.appendChild(child);
const removed = parent.removeChild(child);
console.log(removed === child);`,o=`const parent = document.createElement('div');
const child = document.createElement('p');
parent.appendChild(child);
const removed = parent.removeChild(child);
console.log(removed === child);`,d=[{input:[],expected:"true"}],c=["removeChild returns the removed node","Compare reference with original"],r={id:e,title:t,starterCode:n,solution:o,tests:d,hints:c};export{r as default,c as hints,e as id,o as solution,n as starterCode,d as tests,t as title};
