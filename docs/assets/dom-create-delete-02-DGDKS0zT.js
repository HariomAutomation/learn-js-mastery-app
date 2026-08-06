const t="10-dom-dom-create-delete-02",e="createTextNode",o=`const text = document.createTextNode('Hello');
console.log(text.textContent);`,n=`const text = document.createTextNode('Hello');
console.log(text.textContent);`,s=[{input:[],expected:"Hello"}],c=["createTextNode creates a text node","textContent reads the text"],d={id:t,title:e,starterCode:o,solution:n,tests:s,hints:c};export{d as default,c as hints,t as id,n as solution,o as starterCode,s as tests,e as title};
