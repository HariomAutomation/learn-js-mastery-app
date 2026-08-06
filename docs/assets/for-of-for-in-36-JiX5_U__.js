const t="05-loops-for-of-for-in-36",n="For...Of String Length",o=`const str = "JavaScript";
let length = 0;
for (const char of str) {
  length++;
}
console.log(length);`,s=`const str = "JavaScript";
let length = 0;
for (const char of str) {
  length++;
}
console.log(length);`,e=[{input:[],expected:"10"}],r=["Count characters","Increment counter"],c={id:t,title:n,starterCode:o,solution:s,tests:e,hints:r};export{c as default,r as hints,t as id,s as solution,o as starterCode,e as tests,n as title};
