const e="10-dom-dom-modify-02",t="innerHTML Property",n=`const el = document.querySelector('div');
el.innerHTML = '<b>Bold</b>';
console.log(el.innerHTML);`,o=`const el = document.querySelector('div');
el.innerHTML = '<b>Bold</b>';
console.log(el.innerHTML);`,s=[{input:[],expected:"<b>Bold</b>"}],l=["innerHTML sets HTML content","Parses HTML tags"],i={id:e,title:t,starterCode:n,solution:o,tests:s,hints:l};export{i as default,l as hints,e as id,o as solution,n as starterCode,s as tests,t as title};
