const e="11-events-event-basics-45",t="Event Prevent Default Check",n=`const link = document.querySelector('a');
link.addEventListener('click', function(e) {
  const prevented = e.defaultPrevented;
  console.log(prevented);
});`,s=`const link = document.querySelector('a');
link.addEventListener('click', function(e) {
  const prevented = e.defaultPrevented;
  console.log(prevented);
});`,c=[{input:[],expected:"false"}],o=["defaultPrevented checks if prevented","False until preventDefault called"],l={id:e,title:t,starterCode:n,solution:s,tests:c,hints:o};export{l as default,o as hints,e as id,s as solution,n as starterCode,c as tests,t as title};
