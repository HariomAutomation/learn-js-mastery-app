const t="12-async-async-await-30",c="Async Practice",e=`async function practice() {
  const data = await Promise.resolve('complete');
  console.log(data);
}
practice();`,n=`async function practice() {
  const data = await Promise.resolve('complete');
  console.log(data);
}
practice();`,a=[{input:[],expected:"complete"}],o=["Use async/await for cleaner code","Wrap in try/catch for errors"],s={id:t,title:c,starterCode:e,solution:n,tests:a,hints:o};export{s as default,o as hints,t as id,n as solution,e as starterCode,a as tests,c as title};
