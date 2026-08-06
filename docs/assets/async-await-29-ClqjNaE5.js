const n="12-async-async-await-29",t="Async Pattern",s=`async function fetchUser(id) {
  return await Promise.resolve({ id, name: 'User' + id });
}
async function main() {
  const user = await fetchUser(1);
  console.log(user.name);
}
main();`,e=`async function fetchUser(id) {
  return await Promise.resolve({ id, name: 'User' + id });
}
async function main() {
  const user = await fetchUser(1);
  console.log(user.name);
}
main();`,i=[{input:[],expected:"User1"}],o=["Async function returns promise","Await to get result"],a={id:n,title:t,starterCode:s,solution:e,tests:i,hints:o};export{a as default,o as hints,n as id,e as solution,s as starterCode,i as tests,t as title};
