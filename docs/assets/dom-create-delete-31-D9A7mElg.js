const t="10-dom-dom-create-delete-31",e="fragment Append",n=`const fragment = document.createDocumentFragment();
for (let i = 0; i < 5; i++) {
  const li = document.createElement('li');
  li.textContent = i;
  fragment.appendChild(li);
}
const list = document.createElement('ul');
list.appendChild(fragment);
console.log(list.children.length);`,l=`const fragment = document.createDocumentFragment();
for (let i = 0; i < 5; i++) {
  const li = document.createElement('li');
  li.textContent = i;
  fragment.appendChild(li);
}
const list = document.createElement('ul');
list.appendChild(fragment);
console.log(list.children.length);`,o=[{input:[],expected:"5"}],i=["Fragment is efficient for batch inserts","All children move to list"],c={id:t,title:e,starterCode:n,solution:l,tests:o,hints:i};export{c as default,i as hints,t as id,l as solution,n as starterCode,o as tests,e as title};
