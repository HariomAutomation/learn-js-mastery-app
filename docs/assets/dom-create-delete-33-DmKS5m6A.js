const t="10-dom-dom-create-delete-33",e="Delete Practice",n=`const list = document.createElement('ul');
['A', 'B', 'C'].forEach(t => {
  const li = document.createElement('li');
  li.textContent = t;
  list.appendChild(li);
});
list.lastElementChild.remove();
console.log(list.innerHTML);`,l=`const list = document.createElement('ul');
['A', 'B', 'C'].forEach(t => {
  const li = document.createElement('li');
  li.textContent = t;
  list.appendChild(li);
});
list.lastElementChild.remove();
console.log(list.innerHTML);`,i=[{input:[],expected:"<li>A</li><li>B</li>"}],o=["Remove last child with remove()","Check innerHTML"],s={id:t,title:e,starterCode:n,solution:l,tests:i,hints:o};export{s as default,o as hints,t as id,l as solution,n as starterCode,i as tests,e as title};
