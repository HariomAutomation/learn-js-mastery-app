const e="11-events-event-basics-09",t="Mouseleave Event",o=`const box = document.querySelector('.box');
box.addEventListener('mouseleave', function(e) {
  console.log('left');
});`,n=`const box = document.querySelector('.box');
box.addEventListener('mouseleave', function(e) {
  console.log('left');
});`,s=[{input:[],expected:"left"}],c=["Fires when mouse leaves element","Opposite of mouseenter"],l={id:e,title:t,starterCode:o,solution:n,tests:s,hints:c};export{l as default,c as hints,e as id,n as solution,o as starterCode,s as tests,t as title};
