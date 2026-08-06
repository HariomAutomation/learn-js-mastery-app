const n="06-functions-closures-iife-23",o="IIFE Namespace",t=`const App = (function() {
  const _config = { version: '1.0' };
  return {
    getVersion: () => _config.version
  };
})();
console.log(App.getVersion());`,s=`const App = (function() {
  const _config = { version: '1.0' };
  return {
    getVersion: () => _config.version
  };
})();
console.log(App.getVersion());`,e=[{input:[],expected:"1.0"}],i=["IIFE creates namespace","_config is private"],c={id:n,title:o,starterCode:t,solution:s,tests:e,hints:i};export{c as default,i as hints,n as id,s as solution,t as starterCode,e as tests,o as title};
