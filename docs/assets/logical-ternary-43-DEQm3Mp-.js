const n="03-operators-logical-ternary-43",t="Logical assignment with null",i=`let x = null;
x ??= 'initialized';
console.log(x);`,s=`let x = null;
x ??= 'initialized';
console.log(x);`,l=[{input:[],expected:"initialized"}],e=["??= only assigns if null/undefined","x is null, so assignment happens"],o={id:n,title:t,starterCode:i,solution:s,tests:l,hints:e};export{o as default,e as hints,n as id,s as solution,i as starterCode,l as tests,t as title};
