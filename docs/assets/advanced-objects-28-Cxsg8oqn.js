const e="08-objects-advanced-objects-28",s="Seal vs Freeze",t=`const sealed = Object.seal({a: 1});
const frozen = Object.freeze({b: 2});
sealed.a = 10;
frozen.b = 20;
console.log(sealed.a, frozen.b);`,n=`const sealed = Object.seal({a: 1});
const frozen = Object.freeze({b: 2});
sealed.a = 10;
frozen.b = 20;
console.log(sealed.a, frozen.b);`,o=[{input:[],expected:"10 2"}],a=["Seal allows changes","Freeze prevents"],c={id:e,title:s,starterCode:t,solution:n,tests:o,hints:a};export{c as default,a as hints,e as id,n as solution,t as starterCode,o as tests,s as title};
