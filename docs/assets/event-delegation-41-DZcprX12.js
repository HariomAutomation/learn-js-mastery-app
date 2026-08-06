const t="11-events-event-delegation-41",e="Matches Method",n=`const btn = document.querySelector('button');
btn.addEventListener('click', function(e) {
  console.log(e.target.matches('button'));
});`,o=`const btn = document.querySelector('button');
btn.addEventListener('click', function(e) {
  console.log(e.target.matches('button'));
});`,s=[{input:[],expected:"true"}],c=["matches checks selector match","Returns boolean"],i={id:t,title:e,starterCode:n,solution:o,tests:s,hints:c};export{i as default,c as hints,t as id,o as solution,n as starterCode,s as tests,e as title};
