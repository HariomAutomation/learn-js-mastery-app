const t="11-events-event-delegation-17",e="CustomEvent Detail",n=`const event = new CustomEvent('update', { detail: 42 });
document.addEventListener('update', function(e) {
  console.log(e.detail);
});
document.dispatchEvent(event);`,o=`const event = new CustomEvent('update', { detail: 42 });
document.addEventListener('update', function(e) {
  console.log(e.detail);
});
document.dispatchEvent(event);`,s=[{input:[],expected:"42"}],d=["detail property holds custom data","Can be any type"],a={id:t,title:e,starterCode:n,solution:o,tests:s,hints:d};export{a as default,d as hints,t as id,o as solution,n as starterCode,s as tests,e as title};
