const t="05-loops-for-of-for-in-28",o="String Reverse For...Of",e=`const str = "hello";
let rev = "";
for (const ch of str) {
  rev = ch + rev;
}
console.log(rev);`,n=`const str = "hello";
let rev = "";
for (const ch of str) {
  rev = ch + rev;
}
console.log(rev);`,r=[{input:[],expected:"olleh"}],s=["Prepend each character","Build reversed string"],c={id:t,title:o,starterCode:e,solution:n,tests:r,hints:s};export{c as default,s as hints,t as id,n as solution,e as starterCode,r as tests,o as title};
