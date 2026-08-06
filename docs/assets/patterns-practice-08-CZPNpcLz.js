const t="05-loops-patterns-practice-08",s="Palindrome Check Loop",n=`const str = "madam";
let isPal = true;
for (let i = 0; i < str.length / 2; i++) {
  if (str[i] !== str[str.length - 1 - i]) {
    isPal = false;
    break;
  }
}
console.log(isPal);`,e=`const str = "madam";
let isPal = true;
for (let i = 0; i < str.length / 2; i++) {
  if (str[i] !== str[str.length - 1 - i]) {
    isPal = false;
    break;
  }
}
console.log(isPal);`,o=[{input:[],expected:"true"}],i=["Compare from both ends","Only check half"],l={id:t,title:s,starterCode:n,solution:e,tests:o,hints:i};export{l as default,i as hints,t as id,e as solution,n as starterCode,o as tests,s as title};
