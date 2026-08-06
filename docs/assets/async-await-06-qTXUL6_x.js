const t="12-async-async-await-06",n="Async Arrow Function",s=`const getData = async () => {
  return 'data';
};
getData().then(d => console.log(d));`,a=`const getData = async () => {
  return 'data';
};
getData().then(d => console.log(d));`,e=[{input:[],expected:"data"}],o=["Arrow functions can be async","Return value is a promise"],c={id:t,title:n,starterCode:s,solution:a,tests:e,hints:o};export{c as default,o as hints,t as id,a as solution,s as starterCode,e as tests,n as title};
