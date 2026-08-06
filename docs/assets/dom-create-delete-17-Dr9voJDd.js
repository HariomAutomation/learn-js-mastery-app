const e="10-dom-dom-create-delete-17",t="insertAdjacentElement",n=`const parent = document.createElement('div');
const child = document.createElement('span');
parent.insertAdjacentElement('afterbegin', child);
console.log(parent.children[0] === child);`,c=`const parent = document.createElement('div');
const child = document.createElement('span');
parent.insertAdjacentElement('afterbegin', child);
console.log(parent.children[0] === child);`,s=[{input:[],expected:"true"}],o=["insertAdjacentElement inserts an element","afterbegin places at start"],a={id:e,title:t,starterCode:n,solution:c,tests:s,hints:o};export{a as default,o as hints,e as id,c as solution,n as starterCode,s as tests,t as title};
