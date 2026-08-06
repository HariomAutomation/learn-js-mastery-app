const e="10-dom-dom-selectors-08",t="matches Check",o=`const el = document.querySelector('div');
const doesMatch = el.matches(???);
console.log(doesMatch);`,s=`const el = document.querySelector('div');
const doesMatch = el.matches('div');
console.log(doesMatch);`,c=[{input:[],expected:"false"}],n=["matches checks if element matches a selector","Returns a boolean"],l={id:e,title:t,starterCode:o,solution:s,tests:c,hints:n};export{l as default,n as hints,e as id,s as solution,o as starterCode,c as tests,t as title};
