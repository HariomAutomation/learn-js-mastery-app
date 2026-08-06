const t="08-objects-destructuring-copying-50",e="Rename Class",n=`const config = {url: 'http://example.com', maxRetries: 3};
const {url: endpoint, maxRetries: retries} = config;
console.log(endpoint, retries);`,o=`const config = {url: 'http://example.com', maxRetries: 3};
const {url: endpoint, maxRetries: retries} = config;
console.log(endpoint, retries);`,s=[{input:[],expected:"http://example.com 3"}],i=["Rename to meaningful names","Clean API"],c={id:t,title:e,starterCode:n,solution:o,tests:s,hints:i};export{c as default,i as hints,t as id,o as solution,n as starterCode,s as tests,e as title};
