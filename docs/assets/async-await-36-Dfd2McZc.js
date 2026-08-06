const t="12-async-async-await-36",n="Async Function Return",e=`async function getNum() { return 42; }
getNum().then(n => console.log(n));`,s=`async function getNum() { return 42; }
getNum().then(n => console.log(n));`,o=[{input:[],expected:"42"}],c=["async function returns promise","then() receives the value"],i={id:t,title:n,starterCode:e,solution:s,tests:o,hints:c};export{i as default,c as hints,t as id,s as solution,e as starterCode,o as tests,n as title};
