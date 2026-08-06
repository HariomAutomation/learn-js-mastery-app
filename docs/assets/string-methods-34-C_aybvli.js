const t="09-strings-string-methods-34",s="Match Groups",e=`const str = '2024-01-15';
const result = str.match(/(\\d{4})-(\\d{2})-(\\d{2})/);
console.log(result[1], result[2], result[3]);`,o=`const str = '2024-01-15';
const result = str.match(/(\\d{4})-(\\d{2})-(\\d{2})/);
console.log(result[1], result[2], result[3]);`,n=[{input:[],expected:"2024 01 15"}],r=["Capture groups","Access by index"],c={id:t,title:s,starterCode:e,solution:o,tests:n,hints:r};export{c as default,r as hints,t as id,o as solution,e as starterCode,n as tests,s as title};
