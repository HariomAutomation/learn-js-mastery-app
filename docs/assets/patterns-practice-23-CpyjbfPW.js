const t="05-loops-patterns-practice-23",e="Reverse String Loop",s=`const str = "abcdef";
let result = "";
for (let i = str.length - 1; i >= 0; i--) {
  result += str[i];
}
console.log(result);`,n=`const str = "abcdef";
let result = "";
for (let i = str.length - 1; i >= 0; i--) {
  result += str[i];
}
console.log(result);`,o=[{input:[],expected:"fedcba"}],r=["Start at end","Decrement index"],l={id:t,title:e,starterCode:s,solution:n,tests:o,hints:r};export{l as default,r as hints,t as id,n as solution,s as starterCode,o as tests,e as title};
