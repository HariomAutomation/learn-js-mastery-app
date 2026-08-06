const e="10-dom-dom-create-delete-36",t="cloneNode Separate",n=`const original = document.createElement('div');
const clone = original.cloneNode(true);
original.textContent = 'Changed';
console.log(clone.textContent);`,o=`const original = document.createElement('div');
const clone = original.cloneNode(true);
original.textContent = 'Changed';
console.log(clone.textContent);`,l=[{input:[],expected:""}],c=["Clone is a separate node","Changes to original don't affect clone"],s={id:e,title:t,starterCode:n,solution:o,tests:l,hints:c};export{s as default,c as hints,e as id,o as solution,n as starterCode,l as tests,t as title};
