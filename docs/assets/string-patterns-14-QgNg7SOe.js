const e="09-strings-string-patterns-14",t="Kebab Case",s=`function kebabCase(str) {
  return str.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
}
console.log(kebabCase('helloWorld'));`,o=`function kebabCase(str) {
  return str.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
}
console.log(kebabCase('helloWorld'));`,n=[{input:[],expected:"hello-world"}],r=["Dash before caps","Lowercase all"],a={id:e,title:t,starterCode:s,solution:o,tests:n,hints:r};export{a as default,r as hints,e as id,o as solution,s as starterCode,n as tests,t as title};
