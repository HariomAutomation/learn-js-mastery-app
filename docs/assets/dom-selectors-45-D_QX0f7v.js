const t="10-dom-dom-selectors-45",e="closest Self Match",o=`const el = document.querySelector('.target');
const found = el.closest('.target');
console.log(found === el);`,s=`const el = document.querySelector('.target');
const found = el.closest('.target');
console.log(found === el);`,n=[{input:[],expected:"false"}],c=["closest can match the element itself","Starts checking from the element"],l={id:t,title:e,starterCode:o,solution:s,tests:n,hints:c};export{l as default,c as hints,t as id,s as solution,o as starterCode,n as tests,e as title};
