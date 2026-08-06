const t="03-operators-logical-ternary-26",e="De Morgan's Law NOT AND",s=`const result = !(true && false);
console.log(result);`,o=`const result = !(true && false);
console.log(result);`,r=[{input:[],expected:"true"}],n=["De Morgan: !(A && B) === !A || !B","!(true && false) === !true || !false === true"],l={id:t,title:e,starterCode:s,solution:o,tests:r,hints:n};export{l as default,n as hints,t as id,o as solution,s as starterCode,r as tests,e as title};
