const t="09-strings-string-patterns-04",e="Title Case",s=`function titleCase(str) {
  return str.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');
}
console.log(titleCase('hello world'));`,o=`function titleCase(str) {
  return str.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');
}
console.log(titleCase('hello world'));`,n=[{input:[],expected:"Hello World"}],i=["Capitalize each word","Split, map, join"],l={id:t,title:e,starterCode:s,solution:o,tests:n,hints:i};export{l as default,i as hints,t as id,o as solution,s as starterCode,n as tests,e as title};
