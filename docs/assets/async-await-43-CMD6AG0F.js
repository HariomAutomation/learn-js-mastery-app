const s="12-async-async-await-43",t="Sequential Await",n=`async function seq() {
  const a = await Promise.resolve(1);
  const b = await Promise.resolve(a * 2);
  console.log(b);
}
seq();`,e=`async function seq() {
  const a = await Promise.resolve(1);
  const b = await Promise.resolve(a * 2);
  console.log(b);
}
seq();`,o=[{input:[],expected:"2"}],a=["Sequential awaits","Each depends on previous"],i={id:s,title:t,starterCode:n,solution:e,tests:o,hints:a};export{i as default,a as hints,s as id,e as solution,n as starterCode,o as tests,t as title};
