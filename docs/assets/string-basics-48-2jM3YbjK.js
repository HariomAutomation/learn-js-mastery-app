const t="09-strings-string-basics-48",s="Normalize Practice",n=`const str = 'caf\\u00E9';
console.log(str.length);
console.log(str.normalize().length);`,o=`const str = 'caf\\u00E9';
console.log(str.length);
console.log(str.normalize().length);`,e=[{input:[],expected:`4
4`}],l=["Normalize may change length","Unicode normalization"],c={id:t,title:s,starterCode:n,solution:o,tests:e,hints:l};export{c as default,l as hints,t as id,o as solution,n as starterCode,e as tests,s as title};
