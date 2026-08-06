const t="10-dom-dom-selectors-39",e="getElementById Null",n=`const el = document.getElementById('nonexistent');
console.log(el);`,o=`const el = document.getElementById('nonexistent');
console.log(el);`,s=[{input:[],expected:"null"}],l=["Returns null if element not found","No error is thrown"],c={id:t,title:e,starterCode:n,solution:o,tests:s,hints:l};export{c as default,l as hints,t as id,o as solution,n as starterCode,s as tests,e as title};
