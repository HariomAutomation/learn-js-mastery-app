const t="05-loops-for-while-20",e="Range Generation",n=`let range = [];
for (let i = 1; i <= 5; i++) {
  range.push(i);
}
console.log(range);`,o=`let range = [];
for (let i = 1; i <= 5; i++) {
  range.push(i);
}
console.log(range);`,s=[{input:[],expected:"[ 1, 2, 3, 4, 5 ]"}],i=["Start array empty","Push each i to array"],r={id:t,title:e,starterCode:n,solution:o,tests:s,hints:i};export{r as default,i as hints,t as id,o as solution,n as starterCode,s as tests,e as title};
