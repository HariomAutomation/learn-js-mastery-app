const o="10-dom-dom-create-delete-20",t="importNode",e=`const doc = document;
const div = document.createElement('div');
const imported = doc.importNode(div, false);
console.log(imported.ownerDocument === doc);`,n=`const doc = document;
const div = document.createElement('div');
const imported = doc.importNode(div, false);
console.log(imported.ownerDocument === doc);`,d=[{input:[],expected:"true"}],c=["importNode copies node from another document","Does not add to DOM"],s={id:o,title:t,starterCode:e,solution:n,tests:d,hints:c};export{s as default,c as hints,o as id,n as solution,e as starterCode,d as tests,t as title};
