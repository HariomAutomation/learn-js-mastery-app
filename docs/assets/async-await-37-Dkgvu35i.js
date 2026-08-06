const t="12-async-async-await-37",s="Await Promise",n=`async function wait() {
  const val = await Promise.resolve(10);
  console.log(val);
}
wait();`,o=`async function wait() {
  const val = await Promise.resolve(10);
  console.log(val);
}
wait();`,a=[{input:[],expected:"10"}],e=["await pauses until resolved","Returns resolved value"],i={id:t,title:s,starterCode:n,solution:o,tests:a,hints:e};export{i as default,e as hints,t as id,o as solution,n as starterCode,a as tests,s as title};
