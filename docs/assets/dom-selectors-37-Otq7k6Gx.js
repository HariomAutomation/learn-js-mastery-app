const e="10-dom-dom-selectors-37",n="querySelector Chaining",t=`const inner = document.querySelector('.outer .inner');
console.log(inner);`,o=`const inner = document.querySelector('.outer .inner');
console.log(inner);`,s=[{input:[],expected:"null"}],r=["Space means descendant selector","Finds .inner inside .outer"],c={id:e,title:n,starterCode:t,solution:o,tests:s,hints:r};export{c as default,r as hints,e as id,o as solution,t as starterCode,s as tests,n as title};
