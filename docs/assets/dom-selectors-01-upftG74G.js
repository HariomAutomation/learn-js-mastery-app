const t="10-dom-dom-selectors-01",e="getElementById Basics",s=`const el = document.getElementById(???);
console.log(el);`,o=`const el = document.getElementById('app');
console.log(el);`,n=[{input:[],expected:"null"}],l=["Pass a string with the element's id","Remove the # prefix if present"],c={id:t,title:e,starterCode:s,solution:o,tests:n,hints:l};export{c as default,l as hints,t as id,o as solution,s as starterCode,n as tests,e as title};
