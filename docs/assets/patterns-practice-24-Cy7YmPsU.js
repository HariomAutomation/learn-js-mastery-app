const t="05-loops-patterns-practice-24",n="Palindrome Loop Index",e=`const str = "racecar";
let pal = true;
for (let i = 0; i < Math.floor(str.length / 2); i++) {
  if (str[i] !== str[str.length - 1 - i]) {
    pal = false;
    break;
  }
}
console.log(pal);`,s=`const str = "racecar";
let pal = true;
for (let i = 0; i < Math.floor(str.length / 2); i++) {
  if (str[i] !== str[str.length - 1 - i]) {
    pal = false;
    break;
  }
}
console.log(pal);`,o=[{input:[],expected:"true"}],r=["Only check half","Compare symmetric positions"],l={id:t,title:n,starterCode:e,solution:s,tests:o,hints:r};export{l as default,r as hints,t as id,s as solution,e as starterCode,o as tests,n as title};
