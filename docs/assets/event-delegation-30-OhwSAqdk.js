const t="11-events-event-delegation-30",n="Dynamic Content Handling",e=`const container = document.querySelector('.container');
container.addEventListener('click', function(e) {
  if (e.target.matches('.dynamic-btn')) {
    console.log('dynamic button clicked');
  }
});`,c=`const container = document.querySelector('.container');
container.addEventListener('click', function(e) {
  if (e.target.matches('.dynamic-btn')) {
    console.log('dynamic button clicked');
  }
});`,o=[{input:[],expected:"dynamic button clicked"}],i=["matches checks if element matches selector","Works for future elements"],s={id:t,title:n,starterCode:e,solution:c,tests:o,hints:i};export{s as default,i as hints,t as id,c as solution,e as starterCode,o as tests,n as title};
