const e="11-events-event-delegation-16",t="Custom Events",n=`const event = new CustomEvent('userLogin', { detail: { name: 'John' } });
document.addEventListener('userLogin', function(e) {
  console.log(e.detail.name);
});
document.dispatchEvent(event);`,o=`const event = new CustomEvent('userLogin', { detail: { name: 'John' } });
document.addEventListener('userLogin', function(e) {
  console.log(e.detail.name);
});
document.dispatchEvent(event);`,s=[{input:[],expected:"John"}],i=["CustomEvent creates custom events","detail carries custom data"],c={id:e,title:t,starterCode:n,solution:o,tests:s,hints:i};export{c as default,i as hints,e as id,o as solution,n as starterCode,s as tests,t as title};
