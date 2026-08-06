const t="09-strings-string-methods-49",s="Iteration",o=`const str = 'abc';
for (const char of str) {
  console.log(char);
}`,n=`const str = 'abc';
for (const char of str) {
  console.log(char);
}`,c=[{input:[],expected:`a
b
c`}],r=["for...of iterates chars","Each character"],e={id:t,title:s,starterCode:o,solution:n,tests:c,hints:r};export{e as default,r as hints,t as id,n as solution,o as starterCode,c as tests,s as title};
