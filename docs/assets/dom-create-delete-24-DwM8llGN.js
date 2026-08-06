const e="10-dom-dom-create-delete-24",t="append Multiple",n=`const el = document.createElement('div');
el.append('A', 'B', 'C');
console.log(el.textContent);`,o=`const el = document.createElement('div');
el.append('A', 'B', 'C');
console.log(el.textContent);`,l=[{input:[],expected:"ABC"}],s=["append takes multiple arguments","All are added in order"],d={id:e,title:t,starterCode:n,solution:o,tests:l,hints:s};export{d as default,s as hints,e as id,o as solution,n as starterCode,l as tests,t as title};
