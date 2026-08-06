const e="10-dom-dom-create-delete-28",t="remove All Children",n=`const parent = document.createElement('div');
parent.innerHTML = '<p>A</p><p>B</p><p>C</p>';
while (parent.firstChild) parent.removeChild(parent.firstChild);
console.log(parent.children.length);`,r=`const parent = document.createElement('div');
parent.innerHTML = '<p>A</p><p>B</p><p>C</p>';
while (parent.firstChild) parent.removeChild(parent.firstChild);
console.log(parent.children.length);`,i=[{input:[],expected:"0"}],o=["Loop while firstChild exists","Remove each child"],l={id:e,title:t,starterCode:n,solution:r,tests:i,hints:o};export{l as default,o as hints,e as id,r as solution,n as starterCode,i as tests,t as title};
