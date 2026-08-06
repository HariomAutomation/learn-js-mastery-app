const t="03-operators-logical-ternary-12",e="Nullish coalescing with undefined",n=`const result = undefined ?? 'fallback';
console.log(result);`,s=`const result = undefined ?? 'fallback';
console.log(result);`,o=[{input:[],expected:"fallback"}],l=["undefined triggers the right side of ??","Unlike ||, 0 and '' don't trigger"],i={id:t,title:e,starterCode:n,solution:s,tests:o,hints:l};export{i as default,l as hints,t as id,s as solution,n as starterCode,o as tests,e as title};
