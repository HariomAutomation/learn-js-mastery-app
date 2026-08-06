const t="10-dom-dom-selectors-47",e="querySelectorAll Spread",o=`const items = document.querySelectorAll('span');
const arr = [...items];
console.log(arr.length);`,s=`const items = document.querySelectorAll('span');
const arr = [...items];
console.log(arr.length);`,n=[{input:[],expected:"0"}],r=["Spread converts NodeList to array","Check the array length"],c={id:t,title:e,starterCode:o,solution:s,tests:n,hints:r};export{c as default,r as hints,t as id,s as solution,o as starterCode,n as tests,e as title};
