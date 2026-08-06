const e="10-dom-dom-create-delete-25",t="prepend Multiple",n=`const el = document.createElement('div');
el.append('B', 'C');
el.prepend('A');
console.log(el.textContent);`,o=`const el = document.createElement('div');
el.append('B', 'C');
el.prepend('A');
console.log(el.textContent);`,s=[{input:[],expected:"ABC"}],d=["prepend adds at beginning","Order is preserved"],l={id:e,title:t,starterCode:n,solution:o,tests:s,hints:d};export{l as default,d as hints,e as id,o as solution,n as starterCode,s as tests,t as title};
