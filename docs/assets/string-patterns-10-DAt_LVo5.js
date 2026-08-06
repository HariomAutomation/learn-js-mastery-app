const t="09-strings-string-patterns-10",e="Slugify String",s=`function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}
console.log(slugify('Hello World!'));`,n=`function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}
console.log(slugify('Hello World!'));`,o=[{input:[],expected:"hello-world"}],r=["Lowercase, replace spaces","Remove leading/trailing dashes"],l={id:t,title:e,starterCode:s,solution:n,tests:o,hints:r};export{l as default,r as hints,t as id,n as solution,s as starterCode,o as tests,e as title};
