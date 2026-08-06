const t="03-operators-logical-ternary-24",s="Nullish coalescing assignment (??=)",e=`let x = null;
x ??= 'default';
console.log(x);`,n=`let x = null;
x ??= 'default';
console.log(x);`,l=[{input:[],expected:"default"}],o=["x ??= 'default' means x = x ?? 'default'","x is null, so assignment happens"],a={id:t,title:s,starterCode:e,solution:n,tests:l,hints:o};export{a as default,o as hints,t as id,n as solution,e as starterCode,l as tests,s as title};
