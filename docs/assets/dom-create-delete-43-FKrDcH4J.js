const e="10-dom-dom-create-delete-43",t="Fragment Node Type",n=`const fragment = document.createDocumentFragment();
console.log(fragment.nodeType + ' ' + fragment.nodeName);`,o=`const fragment = document.createDocumentFragment();
console.log(fragment.nodeType + ' ' + fragment.nodeName);`,m=[{input:[],expected:"11 #document-fragment"}],a=["nodeType 11 for DocumentFragment","nodeName is #document-fragment"],s={id:e,title:t,starterCode:n,solution:o,tests:m,hints:a};export{s as default,a as hints,e as id,o as solution,n as starterCode,m as tests,t as title};
