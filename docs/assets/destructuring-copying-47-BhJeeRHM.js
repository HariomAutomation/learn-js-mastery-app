const t="08-objects-destructuring-copying-47",o="Copy Date",e=`const original = new Date('2024-01-01');
const copy = new Date(original);
copy.setFullYear(2025);
console.log(original.getFullYear());
console.log(copy.getFullYear());`,n=`const original = new Date('2024-01-01');
const copy = new Date(original);
copy.setFullYear(2025);
console.log(original.getFullYear());
console.log(copy.getFullYear());`,s=[{input:[],expected:`2024
2025`}],l=["Date constructor copies","Independent dates"],c={id:t,title:o,starterCode:e,solution:n,tests:s,hints:l};export{c as default,l as hints,t as id,n as solution,e as starterCode,s as tests,o as title};
