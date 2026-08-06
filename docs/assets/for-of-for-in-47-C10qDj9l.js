const o="05-loops-for-of-for-in-47",n="For...In Nested Object",t=`const config = {
  db: { host: 'localhost', port: 5432 },
  app: { name: 'MyApp' }
};
for (const key in config) {
  if (config.hasOwnProperty(key)) {
    console.log(key + ': ' + JSON.stringify(config[key]));
  }
}`,s=`const config = {
  db: { host: 'localhost', port: 5432 },
  app: { name: 'MyApp' }
};
for (const key in config) {
  if (config.hasOwnProperty(key)) {
    console.log(key + ': ' + JSON.stringify(config[key]));
  }
}`,e=[{input:[],expected:`db: {"host":"localhost","port":5432}
app: {"name":"MyApp"}`}],i=["JSON.stringify to print","Check own properties"],c={id:o,title:n,starterCode:t,solution:s,tests:e,hints:i};export{c as default,i as hints,o as id,s as solution,t as starterCode,e as tests,n as title};
