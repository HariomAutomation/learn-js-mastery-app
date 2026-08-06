const t="11-events-event-basics-24",e="Once Option",n=`const btn = document.querySelector('button');
btn.addEventListener('click', function() {
  console.log('clicked once');
}, { once: true });
console.log('listener with once option');`,o=`const btn = document.querySelector('button');
btn.addEventListener('click', function() {
  console.log('clicked once');
}, { once: true });
console.log('listener with once option');`,c=[{input:[],expected:"listener with once option"}],s=["once: true removes listener after first call","Third argument is options object"],i={id:t,title:e,starterCode:n,solution:o,tests:c,hints:s};export{i as default,s as hints,t as id,o as solution,n as starterCode,c as tests,e as title};
