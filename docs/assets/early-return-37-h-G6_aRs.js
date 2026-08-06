const t="04-control-flow-early-return-37",e="Early return in async pattern",r=`function fetchData(url) {
  if (!url) return Promise.reject('no url');
  if (typeof url !== 'string') return Promise.reject('invalid url');
  return Promise.resolve(\`fetched \${url}\`);
}
fetchData('test.com').then(console.log);`,n=`function fetchData(url) {
  if (!url) return Promise.reject('no url');
  if (typeof url !== 'string') return Promise.reject('invalid url');
  return Promise.resolve(\`fetched \${url}\`);
}
fetchData('test.com').then(console.log);`,o=[{input:[],expected:"fetched test.com"}],s=["url is truthy","url is a string","Returns resolved promise"],l={id:t,title:e,starterCode:r,solution:n,tests:o,hints:s};export{l as default,s as hints,t as id,n as solution,r as starterCode,o as tests,e as title};
