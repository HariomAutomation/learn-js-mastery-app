const t="05-loops-for-while-49",e="While String Reverse",n=`const str = "world";
let rev = "";
let i = str.length - 1;
while (i >= 0) {
  rev += str[i];
  i--;
}
console.log(rev);`,s=`const str = "world";
let rev = "";
let i = str.length - 1;
while (i >= 0) {
  rev += str[i];
  i--;
}
console.log(rev);`,o=[{input:[],expected:"dlrow"}],r=["Start at last index","Decrement to 0"],l={id:t,title:e,starterCode:n,solution:s,tests:o,hints:r};export{l as default,r as hints,t as id,s as solution,n as starterCode,o as tests,e as title};
