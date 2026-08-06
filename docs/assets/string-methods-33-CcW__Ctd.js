const t="09-strings-string-methods-33",s="Match All",o=`const str = 'a1b2c3';
const result = str.matchAll(/[a-z]/g);
console.log([...result].map(m => m[0]));`,n=`const str = 'a1b2c3';
const result = str.matchAll(/[a-z]/g);
console.log([...result].map(m => m[0]));`,e=[{input:[],expected:"[ 'a', 'b', 'c' ]"}],l=["matchAll iterator","All matches"],c={id:t,title:s,starterCode:o,solution:n,tests:e,hints:l};export{c as default,l as hints,t as id,n as solution,o as starterCode,e as tests,s as title};
