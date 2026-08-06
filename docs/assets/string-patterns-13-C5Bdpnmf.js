const e="09-strings-string-patterns-13",s="Snake Case",t=`function snakeCase(str) {
  return str.replace(/([A-Z])/g, '_$1').toLowerCase().replace(/^_/, '');
}
console.log(snakeCase('helloWorld'));`,n=`function snakeCase(str) {
  return str.replace(/([A-Z])/g, '_$1').toLowerCase().replace(/^_/, '');
}
console.log(snakeCase('helloWorld'));`,o=[{input:[],expected:"hello_world"}],r=["Add underscore before caps","Lowercase all"],a={id:e,title:s,starterCode:t,solution:n,tests:o,hints:r};export{a as default,r as hints,e as id,n as solution,t as starterCode,o as tests,s as title};
