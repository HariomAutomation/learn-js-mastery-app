const n="06-functions-closures-iife-28",t="IIFE Initialization",o=`const config = (function() {
  const settings = { debug: true, env: 'dev' };
  console.log('Config loaded');
  return settings;
})();
console.log(config.env);`,e=`const config = (function() {
  const settings = { debug: true, env: 'dev' };
  console.log('Config loaded');
  return settings;
})();
console.log(config.env);`,s=[{input:[],expected:`Config loaded
dev`}],i=["IIFE runs immediately","Can log during init"],c={id:n,title:t,starterCode:o,solution:e,tests:s,hints:i};export{c as default,i as hints,n as id,e as solution,o as starterCode,s as tests,t as title};
