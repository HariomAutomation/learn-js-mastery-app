const t="10-dom-dom-selectors-34",e="HTMLCollection to Array",o=`const els = document.getElementsByTagName('div');
const arr = [...els];
console.log(Array.isArray(arr));`,r=`const els = document.getElementsByTagName('div');
const arr = [...els];
console.log(Array.isArray(arr));`,s=[{input:[],expected:"true"}],n=["Spread operator can convert array-like","Creates a true array"],a={id:t,title:e,starterCode:o,solution:r,tests:s,hints:n};export{a as default,n as hints,t as id,r as solution,o as starterCode,s as tests,e as title};
