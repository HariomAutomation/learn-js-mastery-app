const r="10-dom-dom-selectors-24",t="querySelectorAll to Array",e=`const items = document.querySelectorAll('.item');
const arr = Array.from(items);
console.log(Array.isArray(arr));`,o=`const items = document.querySelectorAll('.item');
const arr = Array.from(items);
console.log(Array.isArray(arr));`,s=[{input:[],expected:"true"}],n=["Array.from converts array-like to array","Check with Array.isArray"],c={id:r,title:t,starterCode:e,solution:o,tests:s,hints:n};export{c as default,n as hints,r as id,o as solution,e as starterCode,s as tests,t as title};
