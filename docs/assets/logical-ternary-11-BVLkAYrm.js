const t="03-operators-logical-ternary-11",e="Nullish coalescing (??)",l=`const result = null ?? 'default';
console.log(result);`,s=`const result = null ?? 'default';
console.log(result);`,n=[{input:[],expected:"default"}],o=["?? only checks null and undefined","null triggers the right side"],c={id:t,title:e,starterCode:l,solution:s,tests:n,hints:o};export{c as default,o as hints,t as id,s as solution,l as starterCode,n as tests,e as title};
