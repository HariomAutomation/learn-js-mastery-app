const t="10-dom-dom-create-delete-48",e="Create Complete Practice",n=`function createList(items) {
  const ul = document.createElement('ul');
  items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
  });
  return ul;
}
const list = createList(['A', 'B', 'C']);
console.log(list.children.length);`,l=`function createList(items) {
  const ul = document.createElement('ul');
  items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
  });
  return ul;
}
const list = createList(['A', 'B', 'C']);
console.log(list.children.length);`,o=[{input:[],expected:"3"}],i=["Create elements in a loop","Append each to parent"],s={id:t,title:e,starterCode:n,solution:l,tests:o,hints:i};export{s as default,i as hints,t as id,l as solution,n as starterCode,o as tests,e as title};
