const t="12-async-async-await-15",s="Await Promise.race",n=`async function first() {
  const winner = await Promise.race([
    new Promise(r => setTimeout(() => r('slow'), 50)),
    new Promise(r => setTimeout(() => r('fast'), 10))
  ]);
  console.log(winner);
}
first();`,e=`async function first() {
  const winner = await Promise.race([
    new Promise(r => setTimeout(() => r('slow'), 50)),
    new Promise(r => setTimeout(() => r('fast'), 10))
  ]);
  console.log(winner);
}
first();`,i=[{input:[],expected:"fast"}],o=["race returns first settled","Fastest promise wins"],r={id:t,title:s,starterCode:n,solution:e,tests:i,hints:o};export{r as default,o as hints,t as id,e as solution,n as starterCode,i as tests,s as title};
