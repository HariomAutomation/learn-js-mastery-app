const n="12-async-async-await-20",e="Async Event Handler",s=`async function handleClick() {
  const result = await Promise.resolve('clicked');
  console.log(result);
}
console.log('handler defined');`,t=`async function handleClick() {
  const result = await Promise.resolve('clicked');
  console.log(result);
}
console.log('handler defined');`,o=[{input:[],expected:"handler defined"}],c=["Event handlers can be async","Define as async function"],l={id:n,title:e,starterCode:s,solution:t,tests:o,hints:c};export{l as default,c as hints,n as id,t as solution,s as starterCode,o as tests,e as title};
