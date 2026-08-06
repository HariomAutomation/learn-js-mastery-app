const e="10-dom-dom-create-delete-05",t="append Method",n=`const el = document.createElement('div');
el.append('Text', document.createElement('span'));
console.log(el.childNodes.length);`,o=`const el = document.createElement('div');
el.append('Text', document.createElement('span'));
console.log(el.childNodes.length);`,s=[{input:[],expected:"2"}],d=["append adds multiple items at end","Counts text nodes and elements"],l={id:e,title:t,starterCode:n,solution:o,tests:s,hints:d};export{l as default,d as hints,e as id,o as solution,n as starterCode,s as tests,t as title};
