const t="10-dom-dom-selectors-20",e="Null Handling",o=`const el = document.querySelector('.nonexistent');
console.log(el === null);`,n=`const el = document.querySelector('.nonexistent');
console.log(el === null);`,s=[{input:[],expected:"true"}],l=["querySelector returns null when no match","Compare with strict equality"],c={id:t,title:e,starterCode:o,solution:n,tests:s,hints:l};export{c as default,l as hints,t as id,n as solution,o as starterCode,s as tests,e as title};
