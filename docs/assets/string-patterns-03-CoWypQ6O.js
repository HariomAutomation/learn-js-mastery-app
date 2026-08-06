const t="09-strings-string-patterns-03",s="Capitalize First",e=`function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(capitalize('hello'));`,n=`function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(capitalize('hello'));`,r=[{input:[],expected:"Hello"}],i=["First char uppercase","Concat rest"],o={id:t,title:s,starterCode:e,solution:n,tests:r,hints:i};export{o as default,i as hints,t as id,n as solution,e as starterCode,r as tests,s as title};
