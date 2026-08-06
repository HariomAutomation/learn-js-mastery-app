const t="02-data-types-primitive-types-38",s="Convert string to float with parseFloat",n=`const str = "3.14abc";
const num = ;
console.log(num);`,o=`const str = "3.14abc";
const num = parseFloat(str);
console.log(num);`,e=[{input:[],expected:"3.14"}],r=["parseFloat parses decimal numbers","It stops at the first non-numeric character"],a={id:t,title:s,starterCode:n,solution:o,tests:e,hints:r};export{a as default,r as hints,t as id,o as solution,n as starterCode,e as tests,s as title};
