const n="04-control-flow-early-return-13",t="Default fallback on missing key",e=`function getConfig(key) {
  const config = { theme: 'dark', lang: 'en' };
  return config[key] ?? 'default';
}
console.log(getConfig('missing'));`,o=`function getConfig(key) {
  const config = { theme: 'dark', lang: 'en' };
  return config[key] ?? 'default';
}
console.log(getConfig('missing'));`,s=[{input:[],expected:"default"}],i=["config.missing is undefined","?? returns 'default'"],l={id:n,title:t,starterCode:e,solution:o,tests:s,hints:i};export{l as default,i as hints,n as id,o as solution,e as starterCode,s as tests,t as title};
