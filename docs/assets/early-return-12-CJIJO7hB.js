const t="04-control-flow-early-return-12",n="Default fallback pattern",e=`function getConfig(key) {
  const config = { theme: 'dark', lang: 'en' };
  return config[key] ?? 'default';
}
console.log(getConfig('theme'));`,o=`function getConfig(key) {
  const config = { theme: 'dark', lang: 'en' };
  return config[key] ?? 'default';
}
console.log(getConfig('theme'));`,s=[{input:[],expected:"dark"}],i=["config.theme exists","?? returns value if not null/undefined"],l={id:t,title:n,starterCode:e,solution:o,tests:s,hints:i};export{l as default,i as hints,t as id,o as solution,e as starterCode,s as tests,n as title};
