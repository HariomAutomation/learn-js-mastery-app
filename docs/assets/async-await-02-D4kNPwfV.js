const e="12-async-async-await-02",s="Await Expression",t=`async function getValue() {
  const promise = Promise.resolve(42);
  const value = await promise;
  console.log(value);
}
getValue();`,n=`async function getValue() {
  const promise = Promise.resolve(42);
  const value = await promise;
  console.log(value);
}
getValue();`,o=[{input:[],expected:"42"}],a=["await pauses until promise resolves","Returns the resolved value"],i={id:e,title:s,starterCode:t,solution:n,tests:o,hints:a};export{i as default,a as hints,e as id,n as solution,t as starterCode,o as tests,s as title};
