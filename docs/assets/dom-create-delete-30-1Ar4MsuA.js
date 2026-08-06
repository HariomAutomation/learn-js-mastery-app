const e="10-dom-dom-create-delete-30",n="replace All",t=`const parent = document.createElement('div');
parent.innerHTML = '<p>Old</p>';
const newChild = document.createElement('span');
parent.replaceChild(newChild, parent.firstChild);
console.log(parent.innerHTML);`,r=`const parent = document.createElement('div');
parent.innerHTML = '<p>Old</p>';
const newChild = document.createElement('span');
parent.replaceChild(newChild, parent.firstChild);
console.log(parent.innerHTML);`,l=[{input:[],expected:"<span></span>"}],s=["replaceChild swaps nodes","Check innerHTML after replacement"],o={id:e,title:n,starterCode:t,solution:r,tests:l,hints:s};export{o as default,s as hints,e as id,r as solution,t as starterCode,l as tests,n as title};
