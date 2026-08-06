const t="11-events-event-basics-46",e="Event Stop Propagation Check",n=`const btn = document.querySelector('button');
btn.addEventListener('click', function(e) {
  console.log(e.cancelBubble);
});`,o=`const btn = document.querySelector('button');
btn.addEventListener('click', function(e) {
  console.log(e.cancelBubble);
});`,s=[{input:[],expected:"false"}],c=["cancelBubble is legacy stopPropagation","False by default"],l={id:t,title:e,starterCode:n,solution:o,tests:s,hints:c};export{l as default,c as hints,t as id,o as solution,n as starterCode,s as tests,e as title};
