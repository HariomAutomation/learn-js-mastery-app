const t="10-dom-dom-create-delete-14",e="createDocumentFragment",n=`const fragment = document.createDocumentFragment();
console.log(fragment.nodeType);`,o=`const fragment = document.createDocumentFragment();
console.log(fragment.nodeType);`,s=[{input:[],expected:"11"}],c=["DocumentFragment has nodeType 11","It's a lightweight container"],a={id:t,title:e,starterCode:n,solution:o,tests:s,hints:c};export{a as default,c as hints,t as id,o as solution,n as starterCode,s as tests,e as title};
