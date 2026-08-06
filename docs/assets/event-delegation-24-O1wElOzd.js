const e="11-events-event-delegation-24",t="Mouse Delegation",o=`const list = document.querySelector('ul');
list.addEventListener('mouseover', function(e) {
  if (e.target.tagName === 'LI') {
    console.log('hovered');
  }
});`,n=`const list = document.querySelector('ul');
list.addEventListener('mouseover', function(e) {
  if (e.target.tagName === 'LI') {
    console.log('hovered');
  }
});`,s=[{input:[],expected:"hovered"}],r=["Use mouseover/mouseenter for hover","Check target.tagName"],i={id:e,title:t,starterCode:o,solution:n,tests:s,hints:r};export{i as default,r as hints,e as id,n as solution,o as starterCode,s as tests,t as title};
