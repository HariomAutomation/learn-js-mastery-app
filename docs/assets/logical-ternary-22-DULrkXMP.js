const t="03-operators-logical-ternary-22",s="Logical OR assignment (||=)",e=`let x = "";
x ||= "default";
console.log(x);`,n=`let x = "";
x ||= "default";
console.log(x);`,o=[{input:[],expected:"default"}],l=["x ||= 'default' means x = x || 'default'","x is falsy, so assignment happens"],a={id:t,title:s,starterCode:e,solution:n,tests:o,hints:l};export{a as default,l as hints,t as id,n as solution,e as starterCode,o as tests,s as title};
