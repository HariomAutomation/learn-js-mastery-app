const n="12-async-callbacks-promises-27",t="Unhandled Rejection",e=`// Without catch, rejection is unhandled
Promise.reject('error');
console.log('will show warning');`,s=`// Without catch, rejection is unhandled
Promise.reject('error');
console.log('will show warning');`,o=[{input:[],expected:"will show warning"}],c=["Unhandled rejections cause warnings","Always add catch handler"],i={id:n,title:t,starterCode:e,solution:s,tests:o,hints:c};export{i as default,c as hints,n as id,s as solution,e as starterCode,o as tests,t as title};
