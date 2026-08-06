const t="09-strings-string-patterns-12",e="CamelCase",s=`function camelCase(str) {
  return str.replace(/[^a-zA-Z0-9]+(.)/g, (_, c) => c.toUpperCase());
}
console.log(camelCase('hello world'));`,n=`function camelCase(str) {
  return str.replace(/[^a-zA-Z0-9]+(.)/g, (_, c) => c.toUpperCase());
}
console.log(camelCase('hello world'));`,o=[{input:[],expected:"helloWorld"}],a=["Replace separator + char","Capitalize after sep"],r={id:t,title:e,starterCode:s,solution:n,tests:o,hints:a};export{r as default,a as hints,t as id,n as solution,s as starterCode,o as tests,e as title};
