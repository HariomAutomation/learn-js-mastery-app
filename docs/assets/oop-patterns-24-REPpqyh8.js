const e="13-oop-oop-patterns-24",s="Service Locator",t=`const services = {};
function register(name, service) { services[name] = service; }
function getService(name) { return services[name]; }
register('logger', { log: (msg) => console.log(msg) });
getService('logger').log('hello');`,o=`const services = {};
function register(name, service) { services[name] = service; }
function getService(name) { return services[name]; }
register('logger', { log: (msg) => console.log(msg) });
getService('logger').log('hello');`,n=[{input:[],expected:"hello"}],r=["Registry of services","Look up by name"],i={id:e,title:s,starterCode:t,solution:o,tests:n,hints:r};export{i as default,r as hints,e as id,o as solution,t as starterCode,n as tests,s as title};
