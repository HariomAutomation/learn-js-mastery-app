const t="05-loops-for-while-06",n="Continue Statement",i=`for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i);
}`,o=`for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i);
}`,e=[{input:[],expected:`0
1
3
4`}],s=["continue skips current iteration","Use with if statement"],c={id:t,title:n,starterCode:i,solution:o,tests:e,hints:s};export{c as default,s as hints,t as id,o as solution,i as starterCode,e as tests,n as title};
