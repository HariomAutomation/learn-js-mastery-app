const e="11-events-event-basics-13",t="Dblclick Event",c=`const box = document.querySelector('.box');
box.addEventListener('dblclick', function(e) {
  console.log('double clicked');
});`,o=`const box = document.querySelector('.box');
box.addEventListener('dblclick', function(e) {
  console.log('double clicked');
});`,n=[{input:[],expected:"double clicked"}],s=["dblclick fires on double click","Must click twice quickly"],l={id:e,title:t,starterCode:c,solution:o,tests:n,hints:s};export{l as default,s as hints,e as id,o as solution,c as starterCode,n as tests,t as title};
