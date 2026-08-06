const t="09-strings-string-basics-18",s="Normalize",o=`const str = 'caf\\u00E9';
console.log(str.normalize('NFC').length);`,n=`const str = 'caf\\u00E9';
console.log(str.normalize('NFC').length);`,e=[{input:[],expected:"4"}],i=["normalize for unicode","NFC form"],r={id:t,title:s,starterCode:o,solution:n,tests:e,hints:i};export{r as default,i as hints,t as id,n as solution,o as starterCode,e as tests,s as title};
