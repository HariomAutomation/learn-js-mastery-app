const t="05-loops-for-while-25",o="Build String In Loop",e=`let result = "";
for (let i = 65; i < 70; i++) {
  result += String.fromCharCode(i);
}
console.log(result);`,s=`let result = "";
for (let i = 65; i < 70; i++) {
  result += String.fromCharCode(i);
}
console.log(result);`,n=[{input:[],expected:"ABCDE"}],i=["ASCII A is 65","Use String.fromCharCode()"],r={id:t,title:o,starterCode:e,solution:s,tests:n,hints:i};export{r as default,i as hints,t as id,s as solution,e as starterCode,n as tests,o as title};
