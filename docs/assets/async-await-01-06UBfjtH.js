const t="12-async-async-await-01",n="Async Function",e=`async function greet() {
  return 'Hello';
}
greet().then(msg => console.log(msg));`,s=`async function greet() {
  return 'Hello';
}
greet().then(msg => console.log(msg));`,o=[{input:[],expected:"Hello"}],c=["async function returns a promise","Use then to get the value"],i={id:t,title:n,starterCode:e,solution:s,tests:o,hints:c};export{i as default,c as hints,t as id,s as solution,e as starterCode,o as tests,n as title};
