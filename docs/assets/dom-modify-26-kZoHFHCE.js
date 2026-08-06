const e="10-dom-dom-modify-26",n="innerHTML Create Elements",t=`const el = document.querySelector('.container');
el.innerHTML = '<p>Para 1</p><p>Para 2</p>';
console.log(el.children.length);`,o=`const el = document.querySelector('.container');
el.innerHTML = '<p>Para 1</p><p>Para 2</p>';
console.log(el.children.length);`,l=[{input:[],expected:"2"}],s=["innerHTML creates DOM elements","Check children length"],r={id:e,title:n,starterCode:t,solution:o,tests:l,hints:s};export{r as default,s as hints,e as id,o as solution,t as starterCode,l as tests,n as title};
