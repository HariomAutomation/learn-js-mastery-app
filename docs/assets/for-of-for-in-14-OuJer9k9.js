const t="05-loops-for-of-for-in-14",s="For...Of Characters",o=`const str = "cat";
let result = "";
for (const ch of str) {
  result += ch.toUpperCase();
}
console.log(result);`,e=`const str = "cat";
let result = "";
for (const ch of str) {
  result += ch.toUpperCase();
}
console.log(result);`,n=[{input:[],expected:"CAT"}],r=["Iterate characters","Use toUpperCase()"],c={id:t,title:s,starterCode:o,solution:e,tests:n,hints:r};export{c as default,r as hints,t as id,e as solution,o as starterCode,n as tests,s as title};
