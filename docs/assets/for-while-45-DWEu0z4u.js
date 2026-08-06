const t="05-loops-for-while-45",e="Reverse String With Index",s=`const str = "abcde";
let result = "";
for (let i = str.length - 1; i >= 0; i--) {
  result += str[i];
}
console.log(result);`,n=`const str = "abcde";
let result = "";
for (let i = str.length - 1; i >= 0; i--) {
  result += str[i];
}
console.log(result);`,o=[{input:[],expected:"edcba"}],r=["Start at str.length - 1","Decrement to 0"],l={id:t,title:e,starterCode:s,solution:n,tests:o,hints:r};export{l as default,r as hints,t as id,n as solution,s as starterCode,o as tests,e as title};
